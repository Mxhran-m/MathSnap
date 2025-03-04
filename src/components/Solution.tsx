import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Copy, CheckCircle, Download } from 'lucide-react';
import { speak, stopSpeaking } from '../lib/speech';
import 'katex/dist/katex.min.css';
//@ts-ignore
import { InlineMath, BlockMath } from 'react-katex';

interface SolutionProps {
  solution: string;
  onToggleSpeech: (speaking: boolean) => void;
  isSpeaking: boolean;
}

export function Solution({ solution, onToggleSpeech, isSpeaking }: SolutionProps) {
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      stopSpeaking();
      onToggleSpeech(false);
    } else {
      speak(solution, () => onToggleSpeech(false));
      onToggleSpeech(true);
    }
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(solution);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleDownload = () => {
    const blob = new Blob([solution], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'math-solution.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-all">
      <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Solution</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 rounded-lg transition-colors flex items-center gap-1 text-sm"
            aria-label="Copy solution"
            title="Copy solution"
          >
            {copied ? (
              <><CheckCircle className="w-5 h-5 text-green-500" /> Copied</>
            ) : (
              <><Copy className="w-5 h-5 text-gray-600 dark:text-gray-400" /> Copy</>
            )}
          </button>
          
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 rounded-lg transition-colors flex items-center gap-1 text-sm"
            aria-label="Download solution"
            title="Download solution"
          >
            <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" /> Save
          </button>
          
          <button
            onClick={handleToggleSpeech}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1 text-sm ${
              isSpeaking 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
            title={isSpeaking ? "Stop speaking" : "Read aloud"}
          >
            {isSpeaking ? (
              <><VolumeX className="w-5 h-5" /> Stop</>
            ) : (
              <><Volume2 className="w-5 h-5" /> Read</>
            )}
          </button>
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
        {solution.split('\n').map((line, i) => {
          // Check if line contains LaTeX math expressions
          const hasMath = /\$.*\$/.test(line) || /\\[.*\\]/.test(line);
          
          return line.trim() === '' ? (
            <div key={i} className="h-4"></div>
          ) : hasMath ? (
            <div key={i} className="mb-3">
              {line.includes('$') ? (
                <InlineMath math={line.replace(/\$/g, '')} />
              ) : (
                <BlockMath math={line} />
              )}
            </div>
          ) : (
            <p key={i} className="mb-3 text-gray-800 dark:text-gray-200">
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
}