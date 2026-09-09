import { BookModule } from '../types';

export const MODULE_2: BookModule = {
  id: 'module-2',
  moduleNumber: 2,
  title: "Les liaisons chimiques et la géométrie",
  description:
    "Étude rigoureuse des liaisons chimiques (ioniques, covalentes pures et polarisées), construction méthodique des structures de Lewis avec charges formelles et résonance, prédiction de la géométrie par le modèle RPECV (VSEPR), polarité moléculaire globale et théorie de l'hybridation des orbitales atomiques.",
  recapSummary:
    "Les atomes s'associent pour acquérir une configuration électronique stable semblable à celle des gaz nobles. La différence d'électronégativité (ΔÉN) détermine la nature de la liaison (covalente non polaire, covalente polaire ou ionique). Le modèle VSEPR prédit la géométrie tridimensionnelle en minimisant la répulsion entre doublets liants et non liants. La géométrie détermine la polarité globale de la molécule via la somme vectorielle des moments dipolaires. L'hybridation (sp, sp², sp³, sp³d, sp³d²) explique la directionalité des liaisons σ et π.",
  chapters: [
    {
      id: 'chapitre-3',
      moduleId: 'module-2',
      chapterNumber: 3,
      title: "Les types de liaisons chimiques",
      summary:
        "Ce chapitre explore les mécanismes de formation des liaisons chimiques par transfert d'électrons (liaison ionique) ou partage d'électrons (liaison covalente), quantifie l'énergie réticulaire selon la loi de Coulomb et classifie les liaisons selon le continuum de différence d'électronégativité.",
      startPage: 17,
      endPage: 24,
      sections: [
        {
          id: 'sec-3-1',
          title: "La liaison ionique et l'énergie réticulaire",
          pageNumber: 17,
          learningObjectives: [
            "Comprendre le mécanisme de transfert d'électrons entre un métal à faible potentiel d'ionisation et un non-métal à forte affinité électronique.",
            "Définir l'énergie réticulaire et appliquer la loi de Coulomb pour prédire sa grandeur.",
            "Expliquer les propriétés macroscopiques des composés ioniques (dureté, fragilité, températures de fusion très élevées, conductivité électrique en phase liquide ou dissoute)."
          ],
          bodyMarkdown: [
            "Une liaison ionique résulte du transfert complet d'un ou de plusieurs électrons de valence d'un atome métallique (qui s'oxyde en cation) vers un atome non métallique (qui se réduit en anion). Les ions ainsi formés acquièrent généralement la configuration particulièrement stable du gaz noble le plus proche.",
            "À l'état solide, les ions ne forment pas de molécules individuelles, mais s'organisent en un réseau cristallin tridimensionnel périodique et compact, maximisant les attractions entre ions de charges opposées et minimisant les répulsions entre ions de même charge.",
            "L'énergie réticulaire (E_ret) est l'énergie libérée lors de la formation d'une mole de cristal ionique solide à partir de ses ions constitutifs à l'état gazeux : M⁺(g) + X⁻(g) → MX(s) (processus très fortement exothermique, E_ret < 0). Selon la loi de Coulomb, la force électrostatique et l'énergie potentielle obéissent à la relation : E_pot ∝ (q₁ · q₂) / r, où q₁ et q₂ sont les charges respectives des ions et r est la distance interionique (somme des rayons ioniques r⁺ + r⁻).",
            "Conséquences de la loi de Coulomb :",
            "1. L'amplitude de la charge ionique est le facteur dominant : un sel constitué d'ions dipositifs et dinégatifs (comme MgO, où q₁ = +2 et q₂ = -2, produit de charge = 4) possède une énergie réticulaire considérablement supérieure (E_ret = -3791 kJ/mol) à celle d'un sel d'ions univalents comme NaCl (q₁ = +1, q₂ = -1, produit = 1 ; E_ret = -787 kJ/mol). En conséquence, le point de fusion de MgO atteint 2852 °C, contre 801 °C pour NaCl.",
            "2. Lorsque les charges sont identiques, les ions de plus petit rayon ionique se rapprochent davantage, ce qui intensifie l'attraction électrostatique et augmente l'énergie réticulaire (ex. E_ret(LiF) > E_ret(NaCl) > E_ret(KBr))."
          ],
          keyFormulas: [
            {
              formula: "E_ret ∝ (k · q₁ · q₂) / (r⁺ + r⁻)",
              explanation: "Relation de proportionnalité coulombienne gouvernant l'énergie du réseau cristallin ionique."
            }
          ],
          collegeExamTip:
            "Pour classer des composés ioniques par température de fusion croissante, examinez TOUJOURS d'abord le produit des charges absolues (|q₁ · q₂|). Ce n'est qu'en cas d'égalité de charge que vous départagerez les sels en comparant la somme des rayons ioniques (les plus petits ions donnant le point de fusion le plus élevé).",
          commonMistakes:
            "Écrire la formule de l'eau comme un composé ionique H⁺ O²⁻. L'eau est purement covalente moléculaire."
        },
        {
          id: 'sec-3-2',
          title: "La liaison covalente et le continuum d'électronégativité",
          pageNumber: 19,
          learningObjectives: [
            "Décrire la liaison covalente comme la mise en commun d'une ou plusieurs paires d'électrons entre deux atomes.",
            "Différencier liaisons simples, doubles et triples en termes de longueur de liaison et d'énergie de dissociation.",
            "Utiliser l'écart d'électronégativité (ΔÉN) pour classifier une liaison sur le spectre non polaire, polaire ou ionique."
          ],
          bodyMarkdown: [
            "Lorsque deux atomes non métalliques s'approchent, aucun n'est suffisamment enclin à céder totalement un électron. La liaison chimique s'établit alors par le partage mutuel d'une ou de plusieurs paires d'électrons (doublets liants). La densité électronique se concentre dans la région internucléaire, attirant simultanément les deux noyaux positifs.",
            "Multiplicité de la liaison :",
            "• Liaison simple : partage d'un doublet (2 électrons). Exemple : H-H, C-C. C'est la liaison la plus longue et la moins énergétique.",
            "• Liaison double : partage de deux doublets (4 électrons). Exemple : O=O, C=C. Plus courte et plus forte qu'une liaison simple.",
            "• Liaison triple : partage de trois doublets (6 électrons). Exemple : N≡N, C≡C. Extrêmement courte et dotée d'une énergie de dissociation colossale (par exemple, l'énergie de liaison de N₂ est de 945 kJ/mol, ce qui confère à l'azote gazeux son inertie chimique légendaire).",
            "Polarité des liaisons et continuum de liaison :",
            "• Covalente pure (non polaire) : ΔÉN = 0 à 0,4. Les électrons sont partagés de manière parfaitement équitable (ex. Cl-Cl, C-H où ΔÉN = 2,55 - 2,20 = 0,35).",
            "• Covalente polaire : ΔÉN = 0,5 à 1,7. L'atome le plus électronégatif attire préférentiellement le nuage électronique, acquérant une charge partielle négative (δ⁻), tandis que l'autre atome acquiert une charge partielle positive (δ⁺). Il apparaît un moment dipolaire de liaison μ (ex. H-Cl, C-O).",
            "• Ionique : ΔÉN > 1,7 à 2,0 (généralement entre un métal et un non-métal). Le transfert d'électron est considéré comme pratiquement complet (ex. Na-Cl où ΔÉN = 3,16 - 0,93 = 2,23)."
          ],
          keyFormulas: [
            {
              formula: "ΔÉN = |ÉN_A - ÉN_B|",
              explanation: "Différence d'électronégativité absolue entre deux atomes liés."
            },
            {
              formula: "μ = δ · d  (exprimé en debyes, 1 D = 3,336 × 10⁻³⁰ C·m)",
              explanation: "Moment dipolaire d'une liaison de longueur d séparant deux charges partielles ±δ."
            }
          ],
          collegeExamTip:
            "Notez bien que la frontière à ΔÉN = 1,7 n'est pas une barrière étanche mais une convention pédagogique utile. Par exemple, HF possède un ΔÉN de 1,78 mais forme un composé moléculaire covalent hautement polaire, alors que certains composés métal-non-métal avec un ΔÉN proche de 1,6 présentent un caractère ionique prédominant.",
          commonMistakes:
            "Classer la liaison C-H comme polaire. La différence d'électronégativité entre C (2,55) et H (2,20) est de seulement 0,35, ce qui est universellement considéré en chimie collégiale comme une liaison non polaire."
        }
      ],
      exercises: [
        {
          id: 'ex-3-1',
          number: 5,
          title: "Énergie réticulaire et points de fusion des sels",
          statement:
            "On considère les quatre sels ioniques suivants : NaF, NaCl, MgO et CaO.\na) En appliquant la loi de Coulomb, comparez les énergies réticulaires de NaCl et MgO et expliquez pourquoi le point de fusion de MgO (2852 °C) dépasse très largement celui de NaCl (801 °C).\nb) Entre NaF et NaCl, lequel possède l'énergie réticulaire la plus élevée en valeur absolue ? Justifiez à partir des rayons ioniques.\nc) Prévoyez lequel entre MgO et CaO possède la température de fusion la plus élevée.",
          hints: [
            "Analysez d'abord le produit des charges ioniques q₁ · q₂.",
            "Comparez ensuite la somme des rayons des ions impliqués."
          ],
          solutionSteps: [
            "Comparaison NaCl et MgO : Pour NaCl, les ions sont Na⁺ (charge +1) et Cl⁻ (charge -1), donnant un produit de charge |(+1)(-1)| = 1. Pour MgO, les ions sont Mg²⁺ (charge +2) et O²⁻ (charge -2), donnant un produit de charge |(+2)(-2)| = 4. Selon la loi de Coulomb, l'attraction électrostatique est approximativement 4 fois plus intense dans MgO, ce qui engendre une énergie réticulaire considérablement supérieure et un point de fusion bien plus élevé.",
            "Comparaison NaF et NaCl : Les deux composés ont les mêmes charges (+1/-1). Comparons les rayons des anions : F⁻ est sur la période 2 (r ≈ 133 pm) alors que Cl⁻ est sur la période 3 (r ≈ 181 pm). Le fluorure étant nettement plus compact, la distance internucléaire (r⁺ + r⁻) est plus faible dans NaF. L'énergie réticulaire de NaF (-910 kJ/mol) est donc supérieure en valeur absolue à celle de NaCl (-787 kJ/mol).",
            "Comparaison MgO et CaO : Les deux ont des charges +2/-2. Mg²⁺ (période 3, r ≈ 72 pm) est plus petit que Ca²⁺ (période 4, r ≈ 100 pm). La distance Mg-O est plus courte que Ca-O, conférant à MgO une énergie réticulaire plus élevée et donc un point de fusion supérieur à celui de CaO (2572 °C)."
          ],
          finalAnswer: "MgO >> NaCl (facteur 4 sur les charges) ; NaF > NaCl (F⁻ plus petit que Cl⁻) ; MgO > CaO (Mg²⁺ plus petit que Ca²⁺).",
          difficulty: 'fondamental',
          tags: ['Loi de Coulomb', 'Énergie réticulaire', 'Point de fusion', 'Composés ioniques']
        }
      ]
    },
    {
      id: 'chapitre-4',
      moduleId: 'module-2',
      chapterNumber: 4,
      title: "Les structures de Lewis, la géométrie moléculaire et l'hybridation",
      summary:
        "Ce chapitre formalise la méthode de tracé des structures de Lewis, le calcul des charges formelles, l'analyse de résonance et les exceptions à l'octet (déficit, électrons célibataires et octet étendu). Il applique la théorie RPECV (VSEPR) pour prédire les formes géométriques et les angles réels, déduit la polarité moléculaire et introduit l'hybridation des orbitales atomiques.",
      startPage: 25,
      endPage: 34,
      sections: [
        {
          id: 'sec-4-1',
          title: "Méthode systématique de Lewis, charges formelles et résonance",
          pageNumber: 25,
          learningObjectives: [
            "Appliquer rigoureusement la démarche en cinq étapes pour dessiner la structure de Lewis d'une molécule ou d'un ion polyatomique.",
            "Calculer les charges formelles de chaque atome et sélectionner la structure de résonance prépondérante.",
            "Reconnaître et traiter les exceptions à la règle de l'octet (octets incomplets, radicaux, hypervalence)."
          ],
          bodyMarkdown: [
            "La méthode rigoureuse en cinq étapes enseignée au cégep :",
            "1. Calculer le nombre total d'électrons de valence (N_val) en additionnant les électrons de valence de tous les atomes neutres. Pour un anion, AJOUTER la charge ; pour un cation, SOUSTRAIRE la charge.",
            "2. Choisir l'atome central (l'atome le moins électronégatif, à l'exception impérative de l'hydrogène qui est toujours terminal). Placer les autres atomes autour et tracer une liaison simple (un trait = 2 électrons) vers chaque atome périphérique.",
            "3. Soustraire les électrons liants déjà utilisés du total : N_restant = N_val - (2 × nombre de liaisons simples).",
            "4. Distribuer les électrons restants sous forme de doublets non liants sur les atomes périphériques pour compléter leur octet (duet pour H). S'il reste encore des électrons, les placer sur l'atome central.",
            "5. Si l'atome central ne possède pas encore son octet, convertir un ou plusieurs doublets non liants des atomes périphériques en liaisons multiples (doubles ou triples).",
            "Calcul de la charge formelle (CF) : Pour chaque atome, CF = (électrons de valence de l'atome libre) - (nombre d'électrons non liants) - (nombre de liaisons partagées). La structure de Lewis optimale est celle où :",
            "• Les charges formelles sont minimales (aussi proches de zéro que possible).",
            "• Les charges formelles négatives reposent sur les atomes les plus électronégatifs.",
            "• Les charges formelles de même signe ne se touchent pas sur des atomes voisins.",
            "Exceptions majeures à l'octet :",
            "• Octet incomplet : Le béryllium (ex. BeCl₂, 4 électrons autour de Be) et le bore (ex. BF₃, 6 électrons autour de B) sont stables avec moins de 8 électrons.",
            "• Molécules à nombre impair d'électrons (radicaux libres) : ex. NO (11 électrons de valence) et NO₂ (17 électrons de valence).",
            "• Hypervalence (octet étendu) : Les éléments situés à partir de la période 3 (comme P, S, Cl, Br, I, Xe) possèdent des sous-couches d accessibles et peuvent héberger 10, 12 voire 14 électrons autour de l'atome central (ex. SF₆, PCl₅, XeF₄, SO₄²⁻)."
          ],
          keyFormulas: [
            {
              formula: "CF = e⁻_valence - e⁻_non_liants - nombre_de_liaisons",
              explanation: "Formule de calcul de la charge formelle d'un atome dans une structure de Lewis."
            },
            {
              formula: "Somme de toutes les charges formelles = Charge globale de l'espèce",
              explanation: "Règle de conservation de la charge dans toute structure de Lewis."
            }
          ],
          collegeExamTip:
            "Pour l'ion sulfate SO₄²⁻ ou le phosphate PO₄³⁻, vérifiez si votre professeur de cégep demande de minimiser les charges formelles en créant des doubles liaisons (octet étendu sur le soufre avec deux doubles liaisons S=O, CF(S) = 0) ou de respecter strictement la règle de l'octet (4 liaisons simples S-O, CF(S) = +2). Les deux approches sont valides selon le niveau d'approximation exigé !",
          commonMistakes:
            "Tenter d'étendre l'octet sur un atome de la période 2 comme le carbone, l'azote ou l'oxygène. Les éléments de la deuxième période ne disposent pas d'orbitales d et ne peuvent JAMAIS dépasser 8 électrons de valence."
        },
        {
          id: 'sec-4-2',
          title: "La géométrie moléculaire et le modèle RPECV (VSEPR)",
          pageNumber: 28,
          learningObjectives: [
            "Déterminer le nombre stérique (AXmEn) de l'atome central.",
            "Distinguer l'arrangement des doublets électroniques de la géométrie moléculaire réelle.",
            "Expliquer et quantifier la distorsion des angles de liaison due à la répulsion accrue des doublets non liants."
          ],
          bodyMarkdown: [
            "Le modèle RPECV (Répulsion des Paires Électroniques de la Couche de Valence) ou VSEPR postule que les doublets d'électrons de valence (qu'ils soient liants ou non liants) se repoussent mutuellement en raison de leur charge négative et s'orientent dans l'espace de façon à maximiser leur éloignement.",
            "On utilise la notation standard AXmEn où :",
            "• A désigne l'atome central.",
            "• Xm désigne les m atomes liés à l'atome central (une liaison simple, double ou triple compte pour un seul domaine stérique X).",
            "• En désigne les n doublets d'électrons non liants portés par l'atome central.",
            "Le nombre stérique (NS = m + n) dicte l'arrangement des paires d'électrons :",
            "• NS = 2 (AX₂) : arrangement linéaire, angle = 180° (ex. BeCl₂, CO₂).",
            "• NS = 3 : arrangement trigonal plan, angle idéal = 120°. Géométrie moléculaire : AX₃ = trigonale plane (ex. BF₃) ; AX₂E₁ = coudée / en V (ex. SO₂, angle ≈ 119°).",
            "• NS = 4 : arrangement tétraédrique, angle idéal = 109,5°. Géométries : AX₄ = tétraédrique (ex. CH₄, 109,5°) ; AX₃E₁ = pyramidale à base trigonale (ex. NH₃, angle resserré à 107,3°) ; AX₂E₂ = coudée (ex. H₂O, angle resserré à 104,5°).",
            "• NS = 5 : arrangement bipyramidal trigonal, angles = 90° (axial-équatorial) et 120° (équatorial-équatorial). Les doublets non liants occupent impérativement les positions équatoriales plus spacieuses. Géométries : AX₅ = bipyramidale trigonale (ex. PCl₅) ; AX₄E₁ = en balançoire / bascule (ex. SF₄) ; AX₃E₂ = en forme de T (ex. ClF₃) ; AX₂E₃ = linéaire (ex. XeF₂).",
            "• NS = 6 : arrangement octaédrique, angle idéal = 90°. Géométries : AX₆ = octaédrique (ex. SF₆) ; AX₅E₁ = pyramidale à base carrée (ex. BrF₅) ; AX₄E₂ = plane carrée (ex. XeF₄).",
            "Répulsion différentielle : La répulsion entre paires électroniques suit la hiérarchie : doublet non liant - doublet non liant (DNL-DNL) > doublet non liant - doublet liant (DNL-DL) > doublet liant - doublet liant (DL-DL). Les doublets non liants, n'étant retenus que par un seul noyau, occupent un volume spatial plus important et compriment les angles entre liaisons."
          ],
          keyFormulas: [
            {
              formula: "Nombre stérique (NS) = (atomes liés) + (doublets non liants sur l'atome central) = m + n",
              explanation: "Détermine l'arrangement électronique spatial de base."
            }
          ],
          collegeExamTip:
            "Ne confondez jamais l'arrangement géométrique des paires électroniques (qui inclut les doublets non liants) et la géométrie moléculaire (qui ne décrit que la position spatiale des atomes visibles par diffraction des rayons X). Pour l'eau H₂O, l'arrangement est tétraédrique mais la géométrie moléculaire est coudée !",
          commonMistakes:
            "Placer les doublets non liants en position axiale pour NS = 5. Les doublets non liants doivent TOUJOURS être positionnés en équatorial pour minimiser les répulsions à 90°."
        },
        {
          id: 'sec-4-3',
          title: "Polarité moléculaire et théorie de l'hybridation",
          pageNumber: 31,
          learningObjectives: [
            "Prédire la polarité globale d'une molécule à partir de la somme vectorielle des moments dipolaires de liaison.",
            "Identifier les géométries symétriques qui s'annulent (molécules apolaires possédant des liaisons polaires).",
            "Déterminer l'état d'hybridation (sp, sp², sp³, sp³d, sp³d²) de l'atome central et dénombrer les liaisons σ et π."
          ],
          bodyMarkdown: [
            "Une molécule est polaire si elle possède un moment dipolaire global non nul (μ_total ≠ 0). Pour qu'une molécule soit polaire, deux conditions doivent être remplies simultanément :",
            "1. Elle doit contenir au moins une liaison covalente polaire (ΔÉN > 0,4).",
            "2. Sa géométrie spatiale ne doit PAS annuler vectoriellement les moments dipolaires par symétrie.",
            "Molécules symétriques apolaires : Le dioxyde de carbone (CO₂) possède deux liaisons C=O très polaires, mais sa géométrie linéaire (AX₂) place les deux dipôles dans des directions strictement opposées (180°), résultant en une somme vectorielle nulle : μ = 0 D (molécule apolaire). De même, le tétrachlorure de carbone (CCl₄, tétraédrique AX₄), le trifluorure de bore (BF₃, trigonal plan AX₃) et l'hexafluorure de soufre (SF₆, octaédrique AX₆) sont tous apolaires par compensation géométrique parfaite.",
            "À l'inverse, dans l'eau (H₂O, coudée AX₂E₂) et l'ammoniac (NH₃, pyramidale AX₃E₁), la présence de doublets non liants brise la symétrie d'annulation : les composantes dipolaires s'additionnent, produisant un moment dipolaire permanent élevé (μ = 1,85 D pour H₂O).",
            "Théorie de l'hybridation des orbitales atomiques : Linus Pauling a proposé que les orbitales atomiques pures (s, p, d) se combinent mathématiquement pour former de nouvelles orbitales hybrides équivalentes de géométrie adaptée aux liaisons :",
            "• Hybridation sp (NS = 2) : 1 orbitale s + 1 orbitale p → 2 orbitales hybrides sp colinéaires à 180° (ex. C dans l'acétylène C₂H₂ ou CO₂).",
            "• Hybridation sp² (NS = 3) : 1 orbitale s + 2 orbitales p → 3 orbitales hybrides sp² coplanaires à 120° (ex. C dans l'éthylène C₂H₄, B dans BF₃).",
            "• Hybridation sp³ (NS = 4) : 1 orbitale s + 3 orbitales p → 4 orbitales hybrides sp³ dirigées vers les sommets d'un tétraèdre à 109,5° (ex. C dans CH₄, O dans H₂O, N dans NH₃).",
            "• Hybridation sp³d (NS = 5) : 5 orbitales hybrides bipyramidales trigonales (ex. P dans PCl₅).",
            "• Hybridation sp³d² (NS = 6) : 6 orbitales hybrides octaédriques (ex. S dans SF₆).",
            "Nature des liaisons : Une liaison simple est toujours une liaison axiale sigma (σ) par recouvrement frontal. Une liaison double comporte une liaison σ et une liaison latérale pi (π) formée par le recouvrement d'orbitales p non hybridées. Une liaison triple comporte une liaison σ et deux liaisons π perpendiculaires."
          ],
          keyFormulas: [
            {
              formula: "Nombre stérique NS = État d'hybridation (NS=2 → sp ; NS=3 → sp² ; NS=4 → sp³ ; NS=5 → sp³d ; NS=6 → sp³d²)",
              explanation: "Règle de correspondance directe entre le nombre stérique VSEPR et l'état d'hybridation."
            },
            {
              formula: "Liaison simple = 1 σ  |  Liaison double = 1 σ + 1 π  |  Liaison triple = 1 σ + 2 π",
              explanation: "Décomposition du type de liaisons covalentes par recouvrement orbitalaire."
            }
          ],
          collegeExamTip:
            "Pour déterminer instantanément l'état d'hybridation d'un atome dans n'importe quelle molécule complexe, comptez simplement le nombre de domaines électroniques (atomes liés + doublets non liants). 2 domaines = sp ; 3 domaines = sp² ; 4 domaines = sp³ !",
          commonMistakes:
            "Compter les liaisons pi dans le nombre stérique. Une double liaison compte pour UN seul domaine stérique, bien qu'elle contienne 4 électrons."
        }
      ],
      exercises: [
        {
          id: 'ex-4-1',
          number: 6,
          title: "Lewis, VSEPR et polarité du tétrafluorure de xénon",
          statement:
            "Le tétrafluorure de xénon (XeF₄) est un composé remarquable impliquant un gaz noble.\na) Calculez le nombre total d'électrons de valence et dessinez sa structure de Lewis en justifiant l'octet étendu.\nb) Donnez la notation VSEPR (AXmEn), l'arrangement des paires d'électrons et la géométrie moléculaire exacte.\nc) Précisez les angles de liaison F-Xe-F et indiquez si la molécule est polaire ou apolaire.\nd) Quel est l'état d'hybridation de l'atome de xénon dans XeF₄ ?",
          hints: [
            "Le xénon possède 8 électrons de valence et chaque fluor en possède 7.",
            "Le nombre stérique NS = 4 + 2 = 6."
          ],
          solutionSteps: [
            "Nombre d'électrons de valence : Xe (groupe 18) = 8 e⁻ ; 4 × F (groupe 17) = 4 × 7 = 28 e⁻. Total = 36 électrons de valence (18 paires).",
            "Construction de Lewis : On lie les 4 atomes de fluor au xénon par 4 liaisons simples (4 × 2 = 8 e⁻ utilisés). On complète l'octet des 4 fluor (4 × 6 = 24 e⁻ non liants). Total utilisé = 8 + 24 = 32 e⁻. Il reste 36 - 32 = 4 électrons (2 paires non liantes) que l'on place sur l'atome central de xénon. Le xénon est entouré de 12 électrons (octet étendu permis car Xe est en période 5).",
            "VSEPR : m = 4 atomes liés, n = 2 doublets non liants → Formule AX₄E₂. Nombre stérique NS = 6. L'arrangement des paires électroniques est OCTAÉDRIQUE.",
            "Géométrie moléculaire : Pour minimiser les répulsions, les deux doublets non liants se placent aux positions opposées trans (180° l'un de l'autre). Les 4 atomes de fluor occupent les sommets d'un carré dans le plan équatorial. La géométrie moléculaire est donc PLANE CARRÉE.",
            "Angles et polarité : Les angles F-Xe-F dans le plan sont exactement de 90° et 180°. Bien que chaque liaison Xe-F soit polaire (ΔÉN = 3,98 - 2,6 = 1,38), la symétrie plane carrée provoque une annulation vectorielle parfaite des quatre dipôles dans le plan. La molécule XeF₄ est rigoureusement APOLAIRE (μ = 0 D).",
            "Hybridation : Pour un nombre stérique NS = 6, l'atome de xénon adopte une hybridation sp³d²."
          ],
          finalAnswer: "AX₄E₂ ; arrangement octaédrique ; géométrie plane carrée ; angles 90°/180° ; molécule apolaire (μ = 0) ; hybridation sp³d².",
          difficulty: 'avancé',
          tags: ['XeF4', 'VSEPR', 'Octet étendu', 'Plane carrée', 'Hybridation sp3d2']
        },
        {
          id: 'ex-4-2',
          number: 7,
          title: "Dénombrement des liaisons sigma et pi et hybridation",
          statement:
            "On étudie la molécule d'acrylonitrile (CH₂=CH-C≡N), un précurseur industriel des polymères synthétiques.\na) Dessinez la structure de Lewis complète en incluant tous les doublets non liants.\nb) Déterminez l'état d'hybridation de chacun des trois atomes de carbone et de l'atome d'azote.\nc) Dénombrez le nombre total de liaisons sigma (σ) et de liaisons pi (π) dans la molécule entière.",
          hints: [
            "Le carbone C1 forme deux simples C-H et une double C=C.",
            "L'azote forme une triple liaison et porte un doublet non liant."
          ],
          solutionSteps: [
            "Structure de Lewis : H₂C=CH-C≡N. Total électrons : 3 C (3×4=12) + 3 H (3×1=3) + 1 N (5) = 20 électrons (10 paires). Entre C1 et C2 : double liaison. Entre C2 et C3 : simple liaison. Entre C3 et N : triple liaison. L'azote porte un doublet non liant terminal pour compléter son octet.",
            "États d'hybridation :\n  - C1 (CH₂) : lié à 2 H et 1 C (3 domaines stériques, AX₃) → hybridation sp².\n  - C2 (CH) : lié à 1 H, C1 et C3 (3 domaines stériques, AX₃) → hybridation sp².\n  - C3 (C≡N) : lié à C2 et N (2 domaines stériques, AX₂) → hybridation sp.\n  - N (azote terminal) : 1 liaison triple et 1 doublet non liant (2 domaines stériques, AX₁E₁) → hybridation sp.",
            "Dénombrement des liaisons σ :\n  - 2 liaisons C-H (2 σ)\n  - 1 liaison C=C (1 σ)\n  - 1 liaison C-H (1 σ)\n  - 1 liaison C-C (1 σ)\n  - 1 liaison C≡N (1 σ)\nTotal des liaisons σ = 2 + 1 + 1 + 1 + 1 = 6 liaisons σ.",
            "Dénombrement des liaisons π :\n  - La double liaison C=C contient 1 liaison π.\n  - La triple liaison C≡N contient 2 liaisons π.\nTotal des liaisons π = 1 + 2 = 3 liaisons π."
          ],
          finalAnswer: "C1: sp² ; C2: sp² ; C3: sp ; N: sp ; 6 liaisons σ et 3 liaisons π.",
          difficulty: 'intermédiaire',
          tags: ['Hybridation', 'Liaisons sigma et pi', 'Acrylonitrile', 'Lewis']
        }
      ]
    }
  ]
};
