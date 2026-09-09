import React, { useState } from 'react';
import { X, Table, Shapes, Wind, Calculator, Search, Check, Compass, Sparkles } from 'lucide-react';
import { ChemicalElement } from '../types';
import { PERIODIC_TABLE_ELEMENTS } from '../data/periodicTableData';

interface InteractiveToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const InteractiveToolsModal: React.FC<InteractiveToolsModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [activeTab, setActiveTab] = useState<'tableau' | 'vsepr' | 'gaz' | 'moles'>('tableau');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement>(PERIODIC_TABLE_ELEMENTS[0]);
  const [elementSearch, setElementSearch] = useState('');

  // États pour le calculateur de gaz parfaits (PV = nRT)
  const [gasP, setGasP] = useState('101.325'); // kPa
  const [gasV, setGasV] = useState('22.414'); // L
  const [gasN, setGasN] = useState('1.0'); // mol
  const [gasT, setGasT] = useState('273.15'); // K
  const [gasCalcTarget, setGasCalcTarget] = useState<'P' | 'V' | 'n' | 'T'>('V');
  const [gasResult, setGasResult] = useState<string | null>(null);

  // États pour la masse molaire
  const [molarFormula, setMolarFormula] = useState('H2SO4');
  const [molarResult, setMolarResult] = useState<{ mass: number; breakdown: string } | null>(null);

  if (!isOpen) return null;

  // Calculateur PV=nRT (R = 8.31446 kPa·L / (mol·K))
  const handleCalculateGas = () => {
    const R = 8.31446;
    const p = parseFloat(gasP);
    const v = parseFloat(gasV);
    const n = parseFloat(gasN);
    const t = parseFloat(gasT);

    try {
      if (gasCalcTarget === 'V') {
        const val = (n * R * t) / p;
        setGasResult(`Volume calculé (V) = ${val.toFixed(4)} L`);
      } else if (gasCalcTarget === 'P') {
        const val = (n * R * t) / v;
        setGasResult(`Pression calculée (P) = ${val.toFixed(4)} kPa (soit ${(val / 101.325).toFixed(4)} atm)`);
      } else if (gasCalcTarget === 'n') {
        const val = (p * v) / (R * t);
        setGasResult(`Quantité de matière calculée (n) = ${val.toFixed(4)} mol`);
      } else if (gasCalcTarget === 'T') {
        const val = (p * v) / (n * R);
        const valC = val - 273.15;
        setGasResult(`Température calculée (T) = ${val.toFixed(2)} K (${valC.toFixed(2)} °C)`);
      }
    } catch {
      setGasResult('Erreur dans les valeurs fournies. Vérifiez les nombres.');
    }
  };

  // Calculateur de masse molaire simplifié
  const handleCalculateMolarMass = () => {
    const weights: Record<string, number> = {
      H: 1.008,
      He: 4.0026,
      Li: 6.94,
      Be: 9.0122,
      B: 10.81,
      C: 12.011,
      N: 14.007,
      O: 15.999,
      F: 18.998,
      Ne: 20.18,
      Na: 22.99,
      Mg: 24.305,
      Al: 26.982,
      Si: 28.085,
      P: 30.974,
      S: 32.06,
      Cl: 35.45,
      Ar: 39.948,
      K: 39.098,
      Ca: 40.078,
      Br: 79.904,
      I: 126.9,
      Ba: 137.33,
      Pb: 207.2,
      Fe: 55.845,
      Cu: 63.546,
      Zn: 65.38,
      Ag: 107.87,
    };

    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let total = 0;
    const parts: string[] = [];

    while ((match = regex.exec(molarFormula.trim())) !== null) {
      if (match[0] === '') break;
      const element = match[1];
      const count = match[2] ? parseInt(match[2], 10) : 1;
      const w = weights[element];
      if (w !== undefined) {
        const subtotal = w * count;
        total += subtotal;
        parts.push(`${count} × ${element} (${w}) = ${subtotal.toFixed(3)}`);
      } else {
        parts.push(`${element} (masse non répertoriée)`);
      }
    }

    if (total > 0) {
      setMolarResult({
        mass: parseFloat(total.toFixed(3)),
        breakdown: parts.join(' + '),
      });
    } else {
      setMolarResult({
        mass: 0,
        breakdown: 'Formule non reconnue. Essayez H2O, NaCl, C6H12O6, H2SO4...',
      });
    }
  };

  const filteredElements = PERIODIC_TABLE_ELEMENTS.filter(
    (e) =>
      e.name.toLowerCase().includes(elementSearch.toLowerCase()) ||
      e.symbol.toLowerCase().includes(elementSearch.toLowerCase()) ||
      e.number.toString().includes(elementSearch)
  );

  return (
    <div
      id="tools-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-xs"
    >
      <div
        id="tools-modal-container"
        className={`w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden ${
          isDark
            ? 'bg-[#0f172a] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Barre de titre à équilibre géométrique */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
              <Compass className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                Outils interactifs de chimie générale
              </h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Programme collégial québécois
              </p>
            </div>
          </div>
          <button
            id="close-tools-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Onglets des outils géométriques */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold px-6 pt-1 gap-2 overflow-x-auto bg-slate-50/20 dark:bg-slate-900/20">
          <button
            id="tool-tab-periodic-btn"
            onClick={() => setActiveTab('tableau')}
            className={`py-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'tableau'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Tableau périodique</span>
          </button>
          <button
            id="tool-tab-vsepr-btn"
            onClick={() => setActiveTab('vsepr')}
            className={`py-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'vsepr'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Shapes className="w-3.5 h-3.5" />
            <span>Géométries moléculaires (VSEPR)</span>
          </button>
          <button
            id="tool-tab-gas-btn"
            onClick={() => setActiveTab('gaz')}
            className={`py-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'gaz'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Calculateur de gaz parfaits (PV = nRT)</span>
          </button>
          <button
            id="tool-tab-moles-btn"
            onClick={() => setActiveTab('moles')}
            className={`py-2.5 px-3 flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'moles'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Masses molaires et formules</span>
          </button>
        </div>

        {/* Corps du modal */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'tableau' ? (
            /* Onglet 1 : Tableau périodique */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={elementSearch}
                    onChange={(e) => setElementSearch(e.target.value)}
                    placeholder="Filtrer par nom, symbole, Z..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="text-xs font-mono text-slate-500">
                  Cliquez sur un élément pour afficher ses propriétés.
                </div>
              </div>

              {/* Fiche détaillée géométrique */}
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 grid sm:grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-3.5 sm:col-span-2">
                  <div className="w-16 h-16 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center font-bold shadow-xs">
                    <span className="text-[10px] font-mono opacity-80">{selectedElement.number}</span>
                    <span className="text-xl font-display leading-none">{selectedElement.symbol}</span>
                    <span className="text-[9px] font-mono opacity-80 mt-0.5">{selectedElement.atomicMass}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">{selectedElement.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-mono font-semibold uppercase text-[10px]">
                      {selectedElement.category}
                    </span>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Période {selectedElement.period} • Groupe {selectedElement.group}
                    </p>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div>
                    <span className="text-slate-500">Configuration : </span>
                    <span className="font-mono font-bold">{selectedElement.electronConfig}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Électrons de valence : </span>
                    <span className="font-bold">{selectedElement.valencyElectrons}</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div>
                    <span className="text-slate-500">Électronégativité (Pauling) : </span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {selectedElement.electronegativity ?? 'Non définie'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Rayon atomique : </span>
                    <span className="font-bold font-mono">{selectedElement.radiusPm ? `${selectedElement.radiusPm} pm` : 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Grille géométrique des éléments */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-1.5 max-h-72 overflow-y-auto p-1 border rounded-xl border-slate-200 dark:border-slate-800">
                {filteredElements.map((el) => {
                  const isSelected = selectedElement.number === el.number;
                  return (
                    <button
                      key={el.number}
                      onClick={() => setSelectedElement(el)}
                      className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-xs scale-105'
                          : 'border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-[9px] opacity-70 font-mono">{el.number}</span>
                      <span className="text-sm font-display font-bold">{el.symbol}</span>
                      <span className="text-[9px] truncate max-w-[50px] opacity-80">{el.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : activeTab === 'vsepr' ? (
            /* Onglet 2 : Géométries VSEPR */
            <div className="space-y-4 text-xs">
              <p className="text-slate-500 leading-relaxed font-sans">
                Arrangements géométriques et modèles moléculaires RPECV (AXmEn) fondamentaux :
              </p>

              <div className="overflow-x-auto border rounded-xl border-slate-200 dark:border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-[11px] font-mono font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="p-2.5">Formule AXmEn</th>
                      <th className="p-2.5">Nombre stérique (NS)</th>
                      <th className="p-2.5">Arrangement électronique</th>
                      <th className="p-2.5">Géométrie moléculaire</th>
                      <th className="p-2.5">Angles idéaux / réels</th>
                      <th className="p-2.5">Exemples types</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-[11px]">
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₂</td>
                      <td className="p-2.5 font-mono">2</td>
                      <td className="p-2.5">Linéaire</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Linéaire</td>
                      <td className="p-2.5 font-mono">180°</td>
                      <td className="p-2.5 font-mono">BeCl₂, CO₂, HCN</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₃</td>
                      <td className="p-2.5 font-mono">3</td>
                      <td className="p-2.5">Trigonal plan</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Trigonale plane</td>
                      <td className="p-2.5 font-mono">120°</td>
                      <td className="p-2.5 font-mono">BF₃, SO₃, NO₃⁻</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₂E₁</td>
                      <td className="p-2.5 font-mono">3</td>
                      <td className="p-2.5">Trigonal plan</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Coudée (en V)</td>
                      <td className="p-2.5 font-mono">&lt; 120° (≈ 119°)</td>
                      <td className="p-2.5 font-mono">SO₂, O₃, NO₂⁻</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₄</td>
                      <td className="p-2.5 font-mono">4</td>
                      <td className="p-2.5">Tétraédrique</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Tétraédrique</td>
                      <td className="p-2.5 font-mono">109,5°</td>
                      <td className="p-2.5 font-mono">CH₄, CCl₄, NH₄⁺</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₃E₁</td>
                      <td className="p-2.5 font-mono">4</td>
                      <td className="p-2.5">Tétraédrique</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Pyramidale à base trigonale</td>
                      <td className="p-2.5 font-mono">107,3°</td>
                      <td className="p-2.5 font-mono">NH₃, PCl₃, H₃O⁺</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₂E₂</td>
                      <td className="p-2.5 font-mono">4</td>
                      <td className="p-2.5">Tétraédrique</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Coudée</td>
                      <td className="p-2.5 font-mono">104,5°</td>
                      <td className="p-2.5 font-mono">H₂O, OF₂, SCl₂</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₅</td>
                      <td className="p-2.5 font-mono">5</td>
                      <td className="p-2.5">Bipyramidal trigonal</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Bipyramidale trigonale</td>
                      <td className="p-2.5 font-mono">90° et 120°</td>
                      <td className="p-2.5 font-mono">PCl₅, AsF₅</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₄E₁</td>
                      <td className="p-2.5 font-mono">5</td>
                      <td className="p-2.5">Bipyramidal trigonal</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">En balançoire (bascule)</td>
                      <td className="p-2.5 font-mono">&lt; 90° et &lt; 120°</td>
                      <td className="p-2.5 font-mono">SF₄, TeCl₄</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₃E₂</td>
                      <td className="p-2.5 font-mono">5</td>
                      <td className="p-2.5">Bipyramidal trigonal</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">En forme de T</td>
                      <td className="p-2.5 font-mono">&lt; 90° (≈ 87,5°)</td>
                      <td className="p-2.5 font-mono">ClF₃, BrF₃</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₂E₃</td>
                      <td className="p-2.5 font-mono">5</td>
                      <td className="p-2.5">Bipyramidal trigonal</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Linéaire</td>
                      <td className="p-2.5 font-mono">180°</td>
                      <td className="p-2.5 font-mono">XeF₂, I₃⁻</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₆</td>
                      <td className="p-2.5 font-mono">6</td>
                      <td className="p-2.5">Octaédrique</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Octaédrique</td>
                      <td className="p-2.5 font-mono">90°</td>
                      <td className="p-2.5 font-mono">SF₆, PCl₆⁻</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold font-mono">AX₄E₂</td>
                      <td className="p-2.5 font-mono">6</td>
                      <td className="p-2.5">Octaédrique</td>
                      <td className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400">Plane carrée</td>
                      <td className="p-2.5 font-mono">90°</td>
                      <td className="p-2.5 font-mono">XeF₄, ICl₄⁻</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : activeTab === 'gaz' ? (
            /* Onglet 3 : Calculateur de gaz parfaits */
            <div className="space-y-4 text-xs">
              <p className="text-slate-500 leading-relaxed">
                Calculateur officiel basé sur la loi des gaz parfaits : <strong>P · V = n · R · T</strong> (avec R = 8,314 kPa·L/(mol·K)).
              </p>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-200">Variable cible :</span>
                  <select
                    value={gasCalcTarget}
                    onChange={(e) => setGasCalcTarget(e.target.value as any)}
                    className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 font-mono font-bold text-emerald-600 dark:text-emerald-400"
                  >
                    <option value="V">Volume (V)</option>
                    <option value="P">Pression (P)</option>
                    <option value="n">Quantité de matière (n)</option>
                    <option value="T">Température absolue (T)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-slate-500 mb-1 font-mono">Pression P (kPa)</label>
                    <input
                      type="number"
                      value={gasP}
                      disabled={gasCalcTarget === 'P'}
                      onChange={(e) => setGasP(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 disabled:opacity-40 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1 font-mono">Volume V (L)</label>
                    <input
                      type="number"
                      value={gasV}
                      disabled={gasCalcTarget === 'V'}
                      onChange={(e) => setGasV(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 disabled:opacity-40 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1 font-mono">Quantité n (mol)</label>
                    <input
                      type="number"
                      value={gasN}
                      disabled={gasCalcTarget === 'n'}
                      onChange={(e) => setGasN(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 disabled:opacity-40 font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1 font-mono">Température T (K)</label>
                    <input
                      type="number"
                      value={gasT}
                      disabled={gasCalcTarget === 'T'}
                      onChange={(e) => setGasT(e.target.value)}
                      className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 disabled:opacity-40 font-mono text-xs"
                    />
                  </div>
                </div>

                <button
                  id="execute-gas-calc-btn"
                  onClick={handleCalculateGas}
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-mono text-xs shadow-xs transition-colors"
                >
                  Calculer la valeur inconnue
                </button>

                {gasResult && (
                  <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-mono font-bold text-xs">
                    {gasResult}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Onglet 4 : Masse molaire */
            <div className="space-y-4 text-xs">
              <p className="text-slate-500 leading-relaxed">
                Calcul rapide de masse molaire pour les molécules et réactifs usuels :
              </p>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={molarFormula}
                    onChange={(e) => setMolarFormula(e.target.value)}
                    placeholder="Ex: H2SO4, NaCl, C6H12O6, PbI2, KClO3..."
                    className="flex-1 p-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 font-mono uppercase font-bold text-xs"
                  />
                  <button
                    id="calc-molar-mass-btn"
                    onClick={handleCalculateMolarMass}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-mono text-xs transition-colors"
                  >
                    Calculer la masse molaire
                  </button>
                </div>

                {molarResult && (
                  <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-1">
                    <div className="font-mono text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
                      M = {molarResult.mass} g/mol
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                      {molarResult.breakdown}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
