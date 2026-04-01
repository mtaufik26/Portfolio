// src/components/ui/SettingsParticles.jsx
import { useState, useEffect } from 'react';

const PRESETS = {
  minimalis: {
    particleCount: 40,
    particleSpeed: 0.6,
    particleSize: 5,
    particleOpacity: 0.4,
    particleShape: 'circle',
    linksEnabled: false,
    linkWidth: 3.0,
  },
  klasik: {
    particleCount: 80,
    particleSpeed: 1.0,
    particleSize: 2.2,
    particleOpacity: 0.7,
    particleShape: 'circle',
    linksEnabled: true,
    linkWidth: 4.5,
  },
  futuristik: {
    particleCount: 65,
    particleSpeed: 1.2,
    particleSize: 2.0,
    particleOpacity: 0.8,
    particleShape: 'square',
    linksEnabled: true,
    linkWidth: 4.0,
  },
  kosmik: {
    particleCount: 50,
    particleSpeed: 0.6,
    particleSize: 3.0,
    particleOpacity: 0.9,
    particleShape: 'star',
    linksEnabled: true,
    linkWidth: 5.5,
  },
  dinamis: {
    particleCount: 110,
    particleSpeed: 2.0,
    particleSize: 1.8,
    particleOpacity: 0.6,
    particleShape: 'triangle',
    linksEnabled: true,
    linkWidth: 3.5,
  },
  artistik: {
    particleCount: 40,
    particleSpeed: 0.2,
    particleSize: 3.5,
    particleOpacity: 0.5,
    particleShape: 'star',
    linksEnabled: false,
    linkWidth: 5.0,
  },
};

const SettingsParticles = ({ isOpen, onClose, onSettingsChange, currentSettings, colorPresets }) => {
  const [localSettings, setLocalSettings] = useState(currentSettings);
  const [showCustom, setShowCustom] = useState(false);
  const [activePreset, setActivePreset] = useState(null);

  useEffect(() => {
    setLocalSettings(currentSettings);
    setActivePreset(null);
  }, [currentSettings]);

  const handleChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    onSettingsChange(newSettings);
    setActivePreset(null);
  };

  const applyRecommendation = (type) => {
    const preset = PRESETS[type];
    const newSettings = {
      ...localSettings,
      ...preset,
    };
    setLocalSettings(newSettings);
    onSettingsChange(newSettings);
    setActivePreset(type);
  };

  const handleReset = () => {
    const defaultPreset = colorPresets[0];
    const resetSettings = {
      darkMode: true,
      particleCount: 80,
      particleSpeed: 1.0,
      particleSize: 2.2,
      particleOpacity: 0.7,
      particleShape: 'circle',
      linksEnabled: true,
      linkWidth: 4.5,
      colorPreset: defaultPreset,
    };
    setLocalSettings(resetSettings);
    onSettingsChange(resetSettings);
    setActivePreset('klasik');
  };

  const isPresetActive = (type) => {
    if (activePreset) return activePreset === type;
    const current = localSettings;
    const preset = PRESETS[type];
    return (
      current.particleCount === preset.particleCount &&
      current.particleSpeed === preset.particleSpeed &&
      current.particleSize === preset.particleSize &&
      current.particleOpacity === preset.particleOpacity &&
      current.particleShape === preset.particleShape &&
      current.linksEnabled === preset.linksEnabled &&
      current.linkWidth === preset.linkWidth
    );
  };

  if (!isOpen) return null;

  return (
    <div className="relative w-full max-w-full sm:max-w-lg lg:max-w-md bg-black/80 backdrop-blur-lg text-gray-100 rounded-xl shadow-xl p-4 sm:p-6 z-50 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
      {/* Tombol X tetap di pojok kanan atas — tidak ikut scroll */}
      <div className="sticky top-3 right-3 sm:top-4 sm:right-4 z-10 ml-auto w-fit">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-200 transition-colors"
          aria-label="Tutup pengaturan"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Judul dan semua konten lain tetap di dalam area scroll */}
      <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Kustomisasi Tampilan</h2>

      {/* Dark Mode Toggle */}
      <div className="mb-4 sm:mb-5">
        <label className="flex items-center justify-between sm:justify-start sm:space-x-3 cursor-pointer group">
          <span className="text-sm font-medium text-gray-300">Dark Mode</span>
          <div
            className={`relative w-11 h-6 rounded-full transition-colors ${
              localSettings.darkMode ? 'bg-indigo-500' : 'bg-gray-600'
            }`}
            onClick={() => handleChange('darkMode', !localSettings.darkMode)}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                localSettings.darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </label>
      </div>

      {/* Tema Warna */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Tema Warna</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
          {colorPresets.map((preset, i) => (
            <button
              key={i}
              onClick={() => handleChange('colorPreset', preset)}
              className={`px-3 py-2 text-xs rounded-lg border text-left truncate transition-colors ${
                localSettings.colorPreset?.name === preset.name
                  ? 'border-indigo-500 bg-indigo-500/10 text-indigo-200'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Rekomendasi Partikel */}
      <div className="mb-4 sm:mb-5">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Rekomendasi Partikel</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
          {Object.keys(PRESETS).map((type) => (
            <button
              key={type}
              onClick={() => applyRecommendation(type)}
              className={`px-3 py-2 text-xs rounded-lg transition-colors text-left ${
                isPresetActive(type)
                  ? 'border border-indigo-500 bg-indigo-500/10 text-indigo-200'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Hanya mengubah gaya partikel, bukan tema warna.
        </p>
      </div>

      {/* Tombol Custom */}
      <div className="mb-4 sm:mb-5">
        <button
          onClick={() => {
            setShowCustom(!showCustom);
            setActivePreset(null);
          }}
          className="w-full py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-gray-200"
        >
          {showCustom ? 'Sembunyikan Pengaturan Lanjutan' : 'Atur Manual (Custom)'}
        </button>
      </div>

      {showCustom && (
        <div className="space-y-4">
          {/* Bentuk Partikel */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Bentuk Partikel</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { value: 'circle', label: 'Lingkaran' },
                { value: 'square', label: 'Persegi' },
                { value: 'triangle', label: 'Segitiga' },
                { value: 'star', label: 'Bintang' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleChange('particleShape', opt.value)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-lg transition-colors ${
                    localSettings.particleShape === opt.value
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={localSettings.linksEnabled}
                onChange={(e) => handleChange('linksEnabled', e.target.checked)}
                className="w-4 h-4 text-indigo-500 rounded border-gray-500 bg-gray-700 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-300">Tampilkan garis penghubung</span>
            </label>
          </div>

          {localSettings.linksEnabled && (
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">Ketebalan Tali</span>
                <span className="text-sm text-indigo-300 font-mono">{localSettings.linkWidth.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="6"
                step="0.1"
                value={localSettings.linkWidth}
                onChange={(e) => handleChange('linkWidth', Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
              />
            </div>
          )}

          {/* Jumlah */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">Jumlah</span>
              <span className="text-sm text-indigo-300 font-mono">{localSettings.particleCount}</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              value={localSettings.particleCount}
              onChange={(e) => handleChange('particleCount', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
            />
          </div>

          {/* Kecepatan */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">Kecepatan</span>
              <span className="text-sm text-indigo-300 font-mono">{localSettings.particleSpeed.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={localSettings.particleSpeed}
              onChange={(e) => handleChange('particleSpeed', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
            />
          </div>

          {/* Ukuran */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">Ukuran</span>
              <span className="text-sm text-indigo-300 font-mono">{localSettings.particleSize.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={localSettings.particleSize}
              onChange={(e) => handleChange('particleSize', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
            />
          </div>

          {/* Transparansi */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">Transparansi</span>
              <span className="text-sm text-indigo-300 font-mono">{localSettings.particleOpacity.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={localSettings.particleOpacity}
              onChange={(e) => handleChange('particleOpacity', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
            />
          </div>
        </div>
      )}

      <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-700">
        <button
          onClick={handleReset}
          className="w-full py-2 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg transition-colors"
        >
          Reset ke Default
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Semua pengaturan disimpan otomatis.
      </p>
    </div>
  );
};

export default SettingsParticles;