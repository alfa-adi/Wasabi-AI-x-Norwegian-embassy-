import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  Users,
  BookOpen,
  Download,
  Copy,
  Check,
  Play,
  Pause,
  Clock,
  Sparkles,
  Filter,
  FileText,
  ShieldCheck,
  Building2,
  Quote,
  ChevronRight,
  Info,
  Layers,
  HelpCircle,
  Volume2,
  VolumeX,
  Upload,
  RotateCcw,
  RotateCw,
  FileAudio,
  Radio,
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  TRANSCRIPT_SEGMENTS,
  SPEAKERS,
  ROUNDTABLE_THEMES,
  TranscriptSegment,
  SpeakerProfile
} from './data/transcriptData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'transcript' | 'speakers' | 'themes' | 'lexicon'>('transcript');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('All');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [activeSegmentId, setActiveSegmentId] = useState<string>(TRANSCRIPT_SEGMENTS[0].id);
  
  // Real Audio state
  const [audioSource, setAudioSource] = useState<string | null>(null);
  const [audioFileName, setAudioFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPlaybackSeconds, setCurrentPlaybackSeconds] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(7784); // 129m 44s = 7784s
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  // TTS Read-Aloud Mode state
  const [isTtsMode, setIsTtsMode] = useState<boolean>(false);
  const [isTtsSpeaking, setIsTtsSpeaking] = useState<boolean>(false);

  // Copy / Modal state
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fullTextCopied, setFullTextCopied] = useState(false);
  const [showMetadataModal, setShowMetadataModal] = useState(false);
  const [showAudioHelpModal, setShowAudioHelpModal] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const segmentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Format seconds to mm:ss or hh:mm:ss
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Handle local audio file upload
  const handleAudioFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // revoke previous URL if existed
      if (audioSource) {
        URL.revokeObjectURL(audioSource);
      }
      const objectUrl = URL.createObjectURL(file);
      setAudioSource(objectUrl);
      setAudioFileName(file.name);
      setIsTtsMode(false);
      window.speechSynthesis?.cancel();
      setIsTtsSpeaking(false);

      if (audioRef.current) {
        audioRef.current.src = objectUrl;
        audioRef.current.load();
        audioRef.current.currentTime = currentPlaybackSeconds;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  // Drag and drop audio file
  const handleDropAudio = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type.startsWith('audio/') || file.type.startsWith('video/') || file.name.match(/\.(mp3|wav|m4a|aac|ogg|mp4|webm)$/i))) {
      if (audioSource) {
        URL.revokeObjectURL(audioSource);
      }
      const objectUrl = URL.createObjectURL(file);
      setAudioSource(objectUrl);
      setAudioFileName(file.name);
      setIsTtsMode(false);
      window.speechSynthesis?.cancel();
      setIsTtsSpeaking(false);

      if (audioRef.current) {
        audioRef.current.src = objectUrl;
        audioRef.current.load();
        audioRef.current.currentTime = currentPlaybackSeconds;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  // Synchronize active segment with currentPlaybackSeconds
  useEffect(() => {
    const match = TRANSCRIPT_SEGMENTS.find(
      (s) => currentPlaybackSeconds >= s.secondsStart && currentPlaybackSeconds <= s.secondsEnd
    );
    if (match && match.id !== activeSegmentId) {
      setActiveSegmentId(match.id);
      if (autoScroll && activeTab === 'transcript') {
        segmentRefs.current[match.id]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [currentPlaybackSeconds, activeSegmentId, autoScroll, activeTab]);

  // Audio element event listeners
  const onAudioTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentPlaybackSeconds(audioRef.current.currentTime);
    }
  };

  const onAudioLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const togglePlayPause = () => {
    if (audioSource && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Audio play prevented:", err);
        });
      }
    } else {
      // If no file loaded, offer TTS or open file picker
      toggleTtsPlayback();
    }
  };

  // Jump to specific segment
  const jumpToSegment = (seg: TranscriptSegment) => {
    setCurrentPlaybackSeconds(seg.secondsStart);
    setActiveSegmentId(seg.id);

    if (audioSource && audioRef.current) {
      audioRef.current.currentTime = seg.secondsStart;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else if (isTtsMode || isTtsSpeaking) {
      speakSegment(seg);
    }

    segmentRefs.current[seg.id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Seek bar handler
  const handleSeek = (newTime: number) => {
    setCurrentPlaybackSeconds(newTime);
    if (audioSource && audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    const match = TRANSCRIPT_SEGMENTS.find(
      (s) => newTime >= s.secondsStart && newTime <= s.secondsEnd
    );
    if (match) {
      setActiveSegmentId(match.id);
      if (isTtsSpeaking) {
        speakSegment(match);
      }
    }
  };

  const skipSeconds = (delta: number) => {
    const nextTime = Math.max(0, Math.min(audioDuration, currentPlaybackSeconds + delta));
    handleSeek(nextTime);
  };

  // Change playback rate
  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  // Change volume
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      audioRef.current.muted = newVol === 0;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = volume || 1;
      }
    } else {
      setIsMuted(true);
      if (audioRef.current) {
        audioRef.current.muted = true;
      }
    }
  };

  // TTS Read-Aloud functions
  const speakSegment = (seg: TranscriptSegment) => {
    if (!('speechSynthesis' in window)) {
      alert("Web Speech API is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${seg.speaker}. ${seg.text}`);
    utterance.rate = playbackRate;
    utterance.volume = isMuted ? 0 : volume;

    utterance.onstart = () => {
      setIsTtsSpeaking(true);
      setIsPlaying(true);
      setIsTtsMode(true);
    };

    utterance.onend = () => {
      // Find next segment
      const currentIndex = TRANSCRIPT_SEGMENTS.findIndex(s => s.id === seg.id);
      if (currentIndex !== -1 && currentIndex < TRANSCRIPT_SEGMENTS.length - 1) {
        const nextSeg = TRANSCRIPT_SEGMENTS[currentIndex + 1];
        jumpToSegment(nextSeg);
      } else {
        setIsTtsSpeaking(false);
        setIsPlaying(false);
      }
    };

    utterance.onerror = () => {
      setIsTtsSpeaking(false);
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const toggleTtsPlayback = () => {
    if (isTtsSpeaking) {
      window.speechSynthesis.cancel();
      setIsTtsSpeaking(false);
      setIsPlaying(false);
    } else {
      const currentSeg = TRANSCRIPT_SEGMENTS.find(s => s.id === activeSegmentId) || TRANSCRIPT_SEGMENTS[0];
      speakSegment(currentSeg);
    }
  };

  // Stop all playback when changing modes
  const stopAllPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsTtsSpeaking(false);
  };

  // Filtered segments
  const filteredSegments = useMemo(() => {
    return TRANSCRIPT_SEGMENTS.filter((seg) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        seg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        seg.theme.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpeaker = selectedSpeaker === 'All' || seg.speaker === selectedSpeaker;
      const matchesTheme = selectedTheme === 'All' || seg.theme.toLowerCase().includes(selectedTheme.toLowerCase());

      return matchesSearch && matchesSpeaker && matchesTheme;
    });
  }, [searchQuery, selectedSpeaker, selectedTheme]);

  // Copy segment text
  const handleCopy = (seg: TranscriptSegment) => {
    const textToCopy = `[${seg.startTime} - ${seg.endTime}] ${seg.speaker} (${seg.speakerTitle}, ${seg.organization}):\n\n"${seg.text}"`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(seg.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Copy full transcript
  const handleCopyFullTranscript = () => {
    const full = TRANSCRIPT_SEGMENTS.map(
      (s) => `### [${s.startTime} - ${s.endTime}] ${s.speaker} | ${s.organization}\n*${s.theme}*\n\n${s.text}\n`
    ).join('\n---\n\n');
    navigator.clipboard.writeText(full);
    setFullTextCopied(true);
    setTimeout(() => setFullTextCopied(false), 3000);
  };

  // Download transcript
  const handleDownloadTranscript = (format: 'txt' | 'md' | 'json') => {
    let content = '';
    const filename = `AI_Inclusion_UNGA_Roundtable_Transcript.${format}`;
    let mimeType = 'text/plain';

    if (format === 'json') {
      content = JSON.stringify(TRANSCRIPT_SEGMENTS, null, 2);
      mimeType = 'application/json';
    } else if (format === 'md') {
      content = `# AI for Inclusion: UNGA & Wasabi AI Roundtable Transcript\n\n**Venue**: Royal Norwegian Embassy, New Delhi\n**Mandate**: Digital at UNGA Series\n**Duration**: 129 Minutes 44 Seconds\n\n---\n\n` +
        TRANSCRIPT_SEGMENTS.map(
          (s) => `## [${s.startTime} - ${s.endTime}] ${s.speaker}\n**Role:** ${s.speakerTitle} (${s.organization})  \n**Topic:** ${s.theme}\n\n${s.text}\n`
        ).join('\n---\n\n');
      mimeType = 'text/markdown';
    } else {
      content = `AI FOR INCLUSION: UNGA & WASABI AI ROUNDTABLE TRANSCRIPT\nVenue: Royal Norwegian Embassy, New Delhi\nTotal Duration: 129:44\n\n` +
        TRANSCRIPT_SEGMENTS.map(
          (s) => `[${s.startTime} - ${s.endTime}] ${s.speaker} (${s.organization})\nTopic: ${s.theme}\n\n${s.text}\n`
        ).join('\n=========================================\n\n');
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalWords = useMemo(() => {
    return TRANSCRIPT_SEGMENTS.reduce((acc, curr) => acc + curr.text.split(/\s+/).length, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Hidden real HTML5 audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={onAudioTimeUpdate}
        onLoadedMetadata={onAudioLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*,video/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm"
        onChange={handleAudioFileUpload}
        className="hidden"
      />

      {/* Top Banner / Event Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  Digital at UNGA
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">Royal Norwegian Embassy, New Delhi</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                AI for Inclusion: Verbatim Transcript & Audio Player
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Audio connection indicator button */}
            <button
              onClick={() => {
                if (fileInputRef.current) fileInputRef.current.click();
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition ${
                audioSource
                  ? 'bg-emerald-950/60 border-emerald-700/80 text-emerald-300'
                  : 'bg-indigo-950/60 border-indigo-700/80 text-indigo-300 hover:bg-indigo-900/60'
              }`}
              title={audioSource ? `Connected: ${audioFileName}` : "Select your audio file to play the original recording"}
            >
              {audioSource ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Upload className="w-3.5 h-3.5" />}
              <span className="max-w-[130px] sm:max-w-[180px] truncate">
                {audioSource ? audioFileName : 'Connect Audio File'}
              </span>
            </button>

            <button
              onClick={handleCopyFullTranscript}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Copy all transcript text"
            >
              {fullTextCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{fullTextCopied ? 'Copied' : 'Copy'}</span>
            </button>

            <div className="relative group">
              <button
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow shadow-indigo-600/30 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export</span>
              </button>
              <div className="absolute right-0 top-full mt-1.5 w-36 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 hidden group-hover:block z-50">
                <button
                  onClick={() => handleDownloadTranscript('md')}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700 hover:text-white"
                >
                  Markdown (.md)
                </button>
                <button
                  onClick={() => handleDownloadTranscript('txt')}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700 hover:text-white"
                >
                  Plain Text (.txt)
                </button>
                <button
                  onClick={() => handleDownloadTranscript('json')}
                  className="w-full text-left px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-700 hover:text-white"
                >
                  JSON (.json)
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowAudioHelpModal(true)}
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition"
              title="Audio Player Setup & Troubleshooting"
            >
              <HelpCircle className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-1 pb-0 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-800/60">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('transcript')}
              className={`px-3 py-2 font-medium border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'transcript'
                  ? 'border-indigo-400 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Transcript ({TRANSCRIPT_SEGMENTS.length} Segments)</span>
            </button>

            <button
              onClick={() => setActiveTab('speakers')}
              className={`px-3 py-2 font-medium border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'speakers'
                  ? 'border-indigo-400 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Speakers ({Object.keys(SPEAKERS).length})</span>
            </button>

            <button
              onClick={() => setActiveTab('themes')}
              className={`px-3 py-2 font-medium border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'themes'
                  ? 'border-indigo-400 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Themes & Key Debates</span>
            </button>

            <button
              onClick={() => setActiveTab('lexicon')}
              className={`px-3 py-2 font-medium border-b-2 transition flex items-center gap-1.5 ${
                activeTab === 'lexicon'
                  ? 'border-indigo-400 text-indigo-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Concepts & Lexicon</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-slate-400 pb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Duration: <strong className="text-slate-300">129m 44s</strong>
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              Words: <strong className="text-slate-300">{totalWords.toLocaleString()}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* AUDIO PLAYER CONTROLLER BAR */}
      <div 
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropAudio}
        className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-2.5 shadow-inner"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-2.5">
          {/* Top row: Transport Controls, Timeline Scrubber, Mode Toggle, Volume */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Play/Pause & Skip buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => skipSeconds(-15)}
                className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition"
                title="Rewind 15 seconds"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={togglePlayPause}
                className="h-8 w-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition shadow-md shadow-indigo-600/30"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <button
                onClick={() => skipSeconds(15)}
                className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition"
                title="Forward 15 seconds"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              {/* Timers */}
              <div className="flex items-center gap-1.5 ml-2 font-mono text-xs">
                <span className="text-slate-200 font-semibold">{formatTime(currentPlaybackSeconds)}</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400">{formatTime(audioDuration)}</span>
              </div>
            </div>

            {/* Audio Source Status / Mode Indicator */}
            <div className="flex items-center gap-2">
              {audioSource ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                  <FileAudio className="w-3 h-3" />
                  <span>Audio File Active</span>
                </span>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleTtsPlayback}
                    className={`inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium rounded-lg border transition ${
                      isTtsSpeaking
                        ? 'bg-amber-950/70 border-amber-600 text-amber-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                    title="Speak text aloud using browser Text-to-Speech"
                  >
                    <Radio className="w-3 h-3 text-amber-400 animate-pulse" />
                    <span>{isTtsSpeaking ? 'Speaking (TTS)...' : 'Read Aloud (TTS)'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (fileInputRef.current) fileInputRef.current.click();
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-lg bg-indigo-950/60 border border-indigo-800 text-indigo-300 hover:bg-indigo-900/60 transition"
                    title="Click or drop your audio file to hear the original recording"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Load .mp3/.m4a</span>
                  </button>
                </div>
              )}
            </div>

            {/* Playback rate & volume controls */}
            <div className="flex items-center gap-3">
              {/* Speed dropdown */}
              <div className="flex items-center gap-1 text-slate-400">
                <span className="text-[11px]">Speed:</span>
                <select
                  value={playbackRate}
                  onChange={(e) => handleRateChange(Number(e.target.value))}
                  className="bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5 text-xs text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1.0x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2.0x</option>
                </select>
              </div>

              {/* Volume & Mute */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleMute}
                  className="text-slate-400 hover:text-slate-200 transition"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(Number(e.target.value))}
                  className="w-16 accent-indigo-500 h-1 bg-slate-800 rounded cursor-pointer"
                  title={`Volume: ${Math.round(volume * 100)}%`}
                />
              </div>

              {/* Auto scroll toggle */}
              <button
                onClick={() => setAutoScroll(!autoScroll)}
                className={`px-2 py-0.5 rounded text-[11px] border transition ${
                  autoScroll
                    ? 'bg-indigo-950/70 border-indigo-700 text-indigo-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
                title="Automatically scroll transcript to the current speaking segment"
              >
                Auto-Scroll: {autoScroll ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Timeline Seek Bar */}
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={audioDuration}
              step={1}
              value={currentPlaybackSeconds}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="w-full accent-indigo-500 h-2 bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer transition"
            />
          </div>

          {/* Current Active Speaker Track */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/60 pt-1.5">
            <div className="truncate">
              <span className="text-slate-500">Speaking now: </span>
              <strong className="text-slate-200 font-semibold">
                {TRANSCRIPT_SEGMENTS.find(s => s.id === activeSegmentId)?.speaker || "Kartik Sharma"}
              </strong>
              <span className="text-slate-400"> &bull; {TRANSCRIPT_SEGMENTS.find(s => s.id === activeSegmentId)?.organization}</span>
              <span className="text-indigo-400/90 hidden md:inline"> &mdash; "{TRANSCRIPT_SEGMENTS.find(s => s.id === activeSegmentId)?.theme}"</span>
            </div>

            {!audioSource && (
              <span className="text-[11px] text-amber-400/90 flex items-center gap-1 shrink-0">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Tip: Drag & drop your recording file to enable exact audio playback</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* TRANSCRIPT VIEW */}
        {activeTab === 'transcript' && (
          <div className="space-y-6">
            {/* Audio Not Connected Notice & Connect Card */}
            {!audioSource && (
              <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-900/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-900/40 border border-indigo-700/60 text-indigo-400 shrink-0">
                    <FileAudio className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">
                      Why was the audio silent previously?
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      In web browsers, audio playback requires connecting the audio file or using Text-to-Speech. You can now:
                      <br />
                      <strong>1. Load your local audio file:</strong> Click <span className="text-indigo-300 font-semibold underline cursor-pointer" onClick={() => fileInputRef.current?.click()}>Connect Audio File</span> (or drag & drop the audio you uploaded to chat) to hear the exact original voices synchronized with the transcript.
                      <br />
                      <strong>2. Instant Voice Read-Aloud (TTS):</strong> Click <span className="text-amber-300 font-semibold underline cursor-pointer" onClick={toggleTtsPlayback}>Read Aloud (TTS)</span> above to listen to any segment read out loud immediately!
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      if (fileInputRef.current) fileInputRef.current.click();
                    }}
                    className="px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Choose Audio File</span>
                  </button>
                  <button
                    onClick={toggleTtsPlayback}
                    className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-700/50 flex items-center gap-1.5 transition"
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>{isTtsSpeaking ? 'Stop TTS' : 'Play TTS'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Filter & Search Bar */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow-sm backdrop-blur space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-6 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search words, names, topics (e.g. 'Samudra Manthan', 'Aadhaar', 'ANM', 'NotebookLM', 'DPI')..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5">
                    <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={selectedSpeaker}
                      onChange={(e) => setSelectedSpeaker(e.target.value)}
                      className="w-full bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer truncate"
                    >
                      <option value="All" className="bg-slate-900">All Speakers ({Object.keys(SPEAKERS).length})</option>
                      {Object.keys(SPEAKERS).map((spk) => (
                        <option key={spk} value={spk} className="bg-slate-900">{spk}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={selectedTheme}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                      className="w-full bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer truncate"
                    >
                      <option value="All" className="bg-slate-900">All Topics & Themes</option>
                      {ROUNDTABLE_THEMES.map((th) => (
                        <option key={th.id} value={th.title} className="bg-slate-900">{th.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Filter Pill Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-400">
                <span className="text-slate-500">Quick jump:</span>
                <button
                  onClick={() => setSearchQuery('Samudra Manthan')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  Samudra Manthan
                </button>
                <button
                  onClick={() => setSearchQuery('Amara')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  Amara's Law
                </button>
                <button
                  onClick={() => setSearchQuery('ANM')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  ANMs (Maternal Care)
                </button>
                <button
                  onClick={() => setSearchQuery('NariBot')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  NariBot / Voice-to-Ledger
                </button>
                <button
                  onClick={() => setSearchQuery('Aadhaar')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  Aadhaar & UIDAI
                </button>
                <button
                  onClick={() => setSearchQuery('Adivasi')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  Adivasis & Data Centers
                </button>
                <button
                  onClick={() => setSearchQuery('NotebookLM')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                >
                  NotebookLM Fisherwomen
                </button>
                {(searchQuery || selectedSpeaker !== 'All' || selectedTheme !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedSpeaker('All');
                      setSelectedTheme('All');
                    }}
                    className="ml-auto text-indigo-400 hover:underline"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            {/* Transcript Listing */}
            <div className="space-y-4">
              {filteredSegments.length === 0 ? (
                <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
                  <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                  <p className="text-base font-semibold text-slate-300">No matching transcript segments found</p>
                  <p className="text-xs text-slate-500 mt-1">Try relaxing your search terms or filters</p>
                </div>
              ) : (
                filteredSegments.map((seg) => {
                  const speakerInfo = SPEAKERS[seg.speaker];
                  const isActive = seg.id === activeSegmentId;

                  return (
                    <div
                      key={seg.id}
                      ref={(el) => (segmentRefs.current[seg.id] = el)}
                      className={`group rounded-xl border p-5 transition duration-200 relative ${
                        isActive
                          ? 'bg-slate-900 border-indigo-500 shadow-md shadow-indigo-500/10'
                          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Header of Segment */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800/70">
                        <div className="flex items-center gap-3">
                          {/* Avatar Circle */}
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm ${
                              speakerInfo ? speakerInfo.avatarColor : 'bg-slate-700'
                            }`}
                          >
                            {seg.speaker
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .slice(0, 2)}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-sm font-bold text-slate-100">{seg.speaker}</h3>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                                {seg.organization}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">{seg.speakerTitle}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => jumpToSegment(seg)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border transition ${
                              isActive
                                ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                                : 'bg-slate-800 hover:bg-indigo-950 hover:text-indigo-300 text-slate-300 border-slate-700'
                            }`}
                            title="Jump audio to this segment"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{seg.startTime} - {seg.endTime}</span>
                          </button>

                          <button
                            onClick={() => speakSegment(seg)}
                            className="p-1.5 text-slate-400 hover:text-amber-300 hover:bg-slate-800 rounded-md transition"
                            title="Read this segment aloud (TTS)"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleCopy(seg)}
                            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-md transition"
                            title="Copy segment to clipboard"
                          >
                            {copiedId === seg.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Theme Tag */}
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-indigo-300 font-medium bg-indigo-950/40 border border-indigo-800/40 px-2.5 py-0.5 rounded">
                          <Quote className="w-3 h-3 text-indigo-400" />
                          {seg.theme}
                        </span>
                      </div>

                      {/* Verbatim Speech Text */}
                      <div className="text-sm sm:text-[15px] leading-relaxed text-slate-200 whitespace-pre-line font-normal">
                        {seg.text}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* SPEAKERS DIRECTORY VIEW */}
        {activeTab === 'speakers' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Roundtable Participants & Institutional Affiliations</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                More than 20 leaders spanning diplomacy, government think tanks, grassroots NGOs, healthcare, legal reform, academia, and frontier AI startups gathered at the Royal Norwegian Embassy in New Delhi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(SPEAKERS).map(([name, profile]) => {
                const segCount = TRANSCRIPT_SEGMENTS.filter(s => s.speaker === name).length;

                return (
                  <div
                    key={name}
                    className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex flex-col justify-between transition group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-md ${profile.avatarColor}`}
                        >
                          {name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {profile.category}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{profile.role}</p>
                      <p className="text-xs text-indigo-400/90 mt-0.5 flex items-center gap-1">
                        <Building2 className="w-3 h-3 shrink-0" />
                        <span className="truncate">{profile.organization}</span>
                      </p>

                      <p className="text-xs text-slate-400 mt-3 leading-normal border-t border-slate-800/80 pt-2.5">
                        {profile.bio}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-mono">{segCount} segment{segCount !== 1 ? 's' : ''}</span>
                      <button
                        onClick={() => {
                          setSelectedSpeaker(name);
                          setActiveTab('transcript');
                        }}
                        className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 hover:underline"
                      >
                        View speeches <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* THEMES VIEW */}
        {activeTab === 'themes' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Thematic Synthesis & Core Intellectual Debates</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                The conference unpacked how artificial intelligence intersects with democratic legitimacy, rural realities, environmental sustainability, and bureaucratic design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ROUNDTABLE_THEMES.map((theme) => (
                <div
                  key={theme.id}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition"
                >
                  <div>
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      Theme Cluster
                    </span>
                    <h3 className="text-base font-bold text-slate-100 mt-1">{theme.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {theme.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <div className="text-xs text-slate-400 font-medium mb-1.5">Key Contributors:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {theme.speakers.map((spk) => (
                          <span
                            key={spk}
                            className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                          >
                            {spk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedTheme(theme.title);
                        setActiveTab('transcript');
                      }}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 hover:underline"
                    >
                      Filter transcript to this theme <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEXICON & CONCEPTS VIEW */}
        {activeTab === 'lexicon' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-400" />
                <span>Roundtable Lexicon, Systems & Referenced Frameworks</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Contextual explanations of key indigenous, technological, and bureaucratic initiatives cited across the 129-minute dialogue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">Samudra Manthan (समुद्र मंथन)</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Key Metaphor invoked by H.E. Arne Jan Flølo</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  In Hindu mythology, the collaborative ocean churning by Devas (gods) and Asuras (demons) to extract the nectar of immortality (Amrit), which also released deadly poison (Halahala). Symbolizes how massive technological shifts inevitably produce both supreme goods and catastrophic risks simultaneously.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">Amara's Law</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Formulated by Roy Amara (Stanford / IFTF)</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  "We tend to overestimate the effect of a technology in the short run and underestimate the effect in the long run." Exemplified in the session by Hollywood protests against the VCR in the 1980s, which were feared to kill cinema but eventually birthed personalized video on demand.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">MANAV Responsible AI Framework</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">MeitY & IIPA Initiative</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  India's human-centric Responsible AI guideline developed by MeitY and IIPA (led by Prof. Charu Malhotra). Blends ethical standards, data localization, and societal inclusion ("less for more") rather than narrow Western cost-benefit metrics.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">DPI vs. DPG</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Digital Public Infrastructure vs. Goods</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  DPI refers to foundational, population-scale digital rails (e.g. Identity via Aadhaar, Payments via UPI, Data Exchange via DigiLocker). DPGs are open-source applications, models, or datasets built on top of or alongside these foundational rails to solve contextual problems.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">ANMs & High-Risk Pregnancy</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">ARMMAN Frontline Health Model</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Auxiliary Nurse Midwives are frontline village healthcare workers across rural India. ARMMAN trains specialized AI on clinically validated protocols using speech-to-text and text-to-speech so ANMs receive real-time, non-hallucinatory diagnostic assistance without replacing doctors.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">NariBot & Voice-to-Ledger</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Bhashini & AI4Bharat Integration</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  A multilingual conversational agent for rural Self-Help Group (SHG) women entrepreneurs. Converts spoken accounts of micro-transactions into auditable double-entry ledgers via WhatsApp and IVR without requiring digital literacy.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">APAAR ID & Lost Children</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Ministry of Education Initiative</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Automated Permanent Academic Account Registry (One Nation, One Student ID) introduced by Government of India. Cited by Chetna NGO for tracing children transferring between states (e.g. Bihar to Haryana) and tracking lost-and-found runaway children.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">DPDP Act (2023)</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Digital Personal Data Protection Act</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  India's comprehensive privacy legislation governing the processing of digital personal data. Discussed by speakers regarding protection against unauthorized voice cloning, surveillance, and data harvesting in welfare distribution.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <h3 className="text-sm font-bold text-slate-100">The "Killing of Politics"</h3>
                <p className="text-xs text-indigo-400 font-medium mt-0.5">Democratic Legitimacy Critique</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Ambassador Flølo's warning that technocratic consultants strive to build systems so optimized and algorithmic that political debate, citizen dissent, and negotiation are eliminated—undermining democratic legitimacy in the pursuit of pure efficiency.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Audio Setup / Troubleshooting Modal */}
      {showAudioHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <FileAudio className="w-5 h-5 text-indigo-400" />
                Audio Playback Debug & Setup Guide
              </h3>
              <button
                onClick={() => setShowAudioHelpModal(false)}
                className="text-slate-400 hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <strong className="text-indigo-300 block mb-1">Why did the player appear silent?</strong>
                When you upload an audio file to an AI model prompt in AI Studio, the audio is analyzed in cloud server memory by the model. Browser sandbox security prevents web pages inside an iframe from directly reading files off your local drive without user selection.
              </div>

              <div className="space-y-1.5">
                <strong className="text-slate-100 block">Two ways to hear audio now:</strong>
                <p>
                  <strong>Method 1: Connect your audio file (Recommended for original voices)</strong><br />
                  Click the <em>"Connect Audio File"</em> button in the header or drag-and-drop the file from your computer into the player bar. It instantly links the actual recording with zero upload wait!
                </p>
                <p>
                  <strong>Method 2: Read Aloud (Browser Speech Synthesis)</strong><br />
                  Click <em>"Read Aloud (TTS)"</em> or the volume icon on any transcript segment to hear the speech read aloud right now without needing to locate the file.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setShowAudioHelpModal(false);
                  if (fileInputRef.current) fileInputRef.current.click();
                }}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Select Audio File</span>
              </button>
              <button
                onClick={() => setShowAudioHelpModal(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showMetadataModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-400" />
                Roundtable Background & Metadata
              </h3>
              <button
                onClick={() => setShowMetadataModal(false)}
                className="text-slate-400 hover:text-slate-200 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
              <p>
                <strong className="text-slate-100">Title:</strong> AI for Inclusion: Bridging Agency, Digital Public Infrastructure, and Grassroots Realities
              </p>
              <p>
                <strong className="text-slate-100">Convenors:</strong> Wasabi AI in partnership with the Royal Norwegian Embassy in New Delhi, under the mandate of <em>Digital at UNGA</em>.
              </p>
              <p>
                <strong className="text-slate-100">Location:</strong> Royal Norwegian Embassy, Chanakyapuri, New Delhi, India.
              </p>
              <p>
                <strong className="text-slate-100">Format:</strong> High-level multi-stakeholder open democratic roundtable featuring ambassadors, grassroots implementers, health pioneers, legal scholars, and tech founders.
              </p>
              <p>
                <strong className="text-slate-100">Recording Length:</strong> 129 Minutes 44 Seconds (complete verbatim transcript).
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setShowMetadataModal(false)}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Digital at UNGA Series & Wasabi AI &bull; Royal Norwegian Embassy, New Delhi</span>
          <span className="text-slate-400">Verbatim Multi-Speaker Record &bull; 129:44 Runtime</span>
        </div>
      </footer>
    </div>
  );
}
