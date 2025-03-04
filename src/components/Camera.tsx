import React, { useCallback, useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera as CameraIcon, Loader2, RefreshCw, AlertCircle, Upload, Image, FlipHorizontal } from 'lucide-react';
import { analyzeImage } from '../lib/gemini';
import { Solution } from './Solution';

const WEBCAM_CONFIG = {
  width: { min: 640, ideal: 1280, max: 1920 },
  height: { min: 480, ideal: 720, max: 1080 },
  facingMode: 'user',
  screenshotQuality: 0.92,
};

export function Camera() {
  // Add new state and ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const webcamRef = useRef<Webcam>(null);
  const [solution, setSolution] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  
  // Update webcam configuration
  const webcamConfig = {
    ...WEBCAM_CONFIG,
    facingMode: facingMode
  };
  
  // Add camera switch handler
  const switchCamera = useCallback(() => {
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
  }, []);
  
  // Check for camera permission status
  useEffect(() => {
    async function checkCameraPermission() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true);
        // Clean up the stream
        stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        console.error('Camera permission error:', err);
        setHasPermission(false);
      }
    }
    
    checkCameraPermission();
  }, []);
  
  const requestPermission = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);
      setError('');
    } catch (err) {
      console.error('Failed to get camera permission:', err);
      setError('Camera access denied. Please enable camera permissions in your browser settings.');
      setHasPermission(false);
    }
  }, []);
  
  const capture = useCallback(async () => {
    setError('');
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) {
      setError('Failed to capture image. Please try again.');
      return;
    }
  
    setIsAnalyzing(true);
    try {
      const result = await analyzeImage(imageSrc);
      setSolution(result);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  }, [webcamRef]);
  
  // Render different UI based on permission status
  if (hasPermission === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-gray-50 to-gray-100 p-6 dark:from-gray-800 dark:to-gray-900">
        <div className="bg-white dark:bg-gray-800 border border-yellow-200 dark:border-yellow-800/30 rounded-xl p-8 max-w-md text-center shadow-lg">
          <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">Camera Access Required</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            This app needs access to your camera to analyze images. Please allow camera access in your browser settings.
          </p>
          <button
            onClick={requestPermission}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  if (hasPermission === null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium">Requesting camera access...</p>
        </div>
      </div>
    );
  }
  // Add new handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };
  
  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };
  
  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result) {
        setIsAnalyzing(true);
        try {
          const result = await analyzeImage(e.target.result as string);
          setSolution(result);
        } catch (err) {
          setError('Failed to analyze image. Please try again.');
          console.error(err);
        } finally {
          setIsAnalyzing(false);
        }
      }
    };
    reader.readAsDataURL(file);
  };
  // Modify the return statement to include drag-drop and file upload
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pb-8">
      <div 
        className={`relative w-full max-w-4xl h-[70vh] bg-gray-900 overflow-hidden rounded-lg shadow-xl mt-6 border ${
          dragActive ? 'border-blue-500 border-2' : 'border-gray-700'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Webcam Feed */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          className="absolute top-0 left-0 w-full h-full object-contain"
          videoConstraints={webcamConfig}
          mirrored={facingMode === 'user'}
          onUserMediaError={(err) => {
            console.error('Webcam error:', err);
            setError('Failed to access camera. Please check permissions and try again.');
            setHasPermission(false);
          }}
        />
        {/* Camera controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          <button
            onClick={capture}
            disabled={isAnalyzing}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-medium"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <CameraIcon className="w-6 h-6" />
                Capture
              </>
            )}
          </button>
  
          <button
            onClick={switchCamera}
            disabled={isAnalyzing}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-full flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-medium"
            title="Switch Camera"
          >
            <FlipHorizontal className="w-6 h-6" />
          </button>
  
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isAnalyzing}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-4 rounded-full flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-medium"
          >
            <Image className="w-6 h-6" />
          </button>
        </div>
  
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />
      </div>
  {/* Error Message */}
      {error && (
        <div className="w-full max-w-4xl bg-red-50 border border-red-200 rounded-lg p-4 mt-6 dark:bg-red-900/20 dark:border-red-800 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}
  
      {/* Solution Display */}
      {solution && !error && (
        <div className="w-full max-w-4xl mt-6">
          <Solution
            solution={solution}
            isSpeaking={isSpeaking}
            onToggleSpeech={setIsSpeaking}
          />
        </div>
      )}
    </div>
  );
}
