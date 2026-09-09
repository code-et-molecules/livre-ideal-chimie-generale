import { BookModule } from '../types';

export const MODULE_3: BookModule = {
  id: 'module-3',
  moduleNumber: 3,
  title: "Les forces intermoléculaires et les états de la matière",
  description:
    "Analyse approfondie des forces d'attraction intermoléculaires (forces de dispersion de London, interactions dipôle-dipôle et liaisons hydrogène), de leurs répercussions sur les états liquide et solide, et étude thermodynamique et cinétique des gaz selon les lois des gaz parfaits et la loi de Dalton.",
  recapSummary:
    "Les forces intermoléculaires dictent les propriétés physiques macroscopiques des substances moléculaires (températures d'ébullition et de fusion, viscosité, pression de vapeur). Les forces de dispersion de London sont universelles et dépendent de la polarisabilité et de la masse molaire. Les interactions dipôle-dipôle s'y ajoutent pour les molécules polaires, tandis que la liaison hydrogène (avec F, O ou N) confère des propriétés exceptionnelles (comme pour l'eau). L'état gazeux est décrit par l'équation des gaz parfaits (PV = nRT) et la loi des pressions partielles de Dalton.",
  chapters: [
    {
      id: 'chapitre-5',
      moduleId: 'module-3',
      chapterNumber: 5,
      title: "Les interactions intermoléculaires et les états condensés",
      summary:
        "Ce chapitre classe et compare les forces d'attraction intermoléculaires de van der Waals et la liaison hydrogène, et analyse leur rôle déterminant dans les transitions de phase et les propriétés des liquides et des solides.",
      startPage: 35,
      endPage: 44,
      sections: [
        {
          id: 'sec-5-1',
          title: "Classification et hiérarchie des forces intermoléculaires",
          pageNumber: 35,
          learningObjectives: [
            "Distinguer les liaisons intramoléculaires (liaisons covalentes) des forces intermoléculaires (forces de van der Waals).",
            "Expliquer l'origine des forces de dispersion de London et les facteurs modulant la polarisabilité.",
            "Identifier les interactions dipôle-dipôle permanentes et reconnaître les conditions indispensables à la formation d'un pont hydrogène."
          ],
          bodyMarkdown: [
            "Il est crucial de ne pas confondre les liaisons intramoléculaires (qui unissent les atomes au sein d'une même molécule par partage d'électrons, d'une énergie typique de 150 à 1000 kJ/mol) et les forces intermoléculaires (qui s'exercent entre molécules distinctes, d'une énergie beaucoup plus modeste de 0,1 à 40 kJ/mol). Lors d'un changement de phase physique comme l'ébullition de l'eau, seules les forces intermoléculaires sont brisées ; les molécules d'eau H₂O restent intactes.",
            "1. Les forces de dispersion de London (forces de van der Waals induites) :",
            "Présentes dans TOUTES les molécules sans exception, qu'elles soient polaires ou apolaires. Elles résultent de fluctuations quantiques aléatoires de la distribution électronique créant un dipôle instantané éphémère, qui induit à son tour un dipôle dans la molécule voisine.",
            "Leur intensité dépend directement de la polarisabilité (facilité avec laquelle le nuage électronique peut être déformé). La polarisabilité augmente avec :",
            "• Le nombre total d'électrons et la masse molaire : les halogènes illustrent parfaitement ce phénomène (F₂ et Cl₂ sont des gaz à 25 °C, Br₂ est un liquide, et I₂ est un solide sublimable car le grand nuage électronique de l'iode est hautement polarisable).",
            "• La forme spatiale et l'aire de contact de la molécule : entre deux isomères de même masse molaire (ex. n-pentane linéaire vs néopentane sphérique), la molécule linéaire offre une plus grande surface de contact, ce qui intensifie les forces de London et élève son point d'ébullition (36 °C pour le n-pentane contre 9,5 °C pour le néopentane).",
            "2. Les interactions dipôle-dipôle (forces de Keesom) :",
            "Elles s'exercent exclusivement entre molécules polaires permanentes (μ ≠ 0). Les pôles partiels opposés (δ⁺ et δ⁻) s'attirent mutuellement de façon électrostatique, stabilisant la phase liquide.",
            "3. La liaison hydrogène (ou pont hydrogène) :",
            "C'est une interaction dipôle-dipôle particulièrement puissante (10 à 40 kJ/mol), qui ne se forme QUE lorsqu'un atome d'hydrogène est lié de façon covalente à un petit atome hautement électronégatif possédant au moins un doublet non liant, à savoir le fluor (F), l'oxygène (O) ou l'azote (N).",
            "Conséquences spectaculaires de la liaison hydrogène : l'eau (H₂O, masse molaire 18 g/mol) bout à 100 °C, alors que l'analogue sans pont hydrogène H₂S (masse molaire 34 g/mol) bout à -60 °C ! Sans les liaisons hydrogène, l'eau serait un gaz à température ambiante et la vie sur Terre serait impossible."
          ],
          keyFormulas: [
            {
              formula: "Hiérarchie d'intensité : Dispersion de London < Dipôle-dipôle < Liaison hydrogène << Liaison covalente/ionique",
              explanation: "Ordre général d'énergie pour des molécules de masses molaires comparables."
            },
            {
              formula: "Condition pont H : Donneur (X-H avec X = F, O, N) + Accepteur (atome Y = F, O, N avec doublet non liant)",
              explanation: "Critère structural strict pour l'établissement d'une liaison hydrogène."
            }
          ],
          collegeExamTip:
            "Pour comparer les températures d'ébullition de deux composés au cégep : 1) Identifiez d'abord TOUTES les forces intermoléculaires présentes dans chaque substance. 2) Si l'un des composés possède des ponts hydrogène et l'autre non (à masses molaires proches), celui avec les ponts hydrogène l'emporte nettement. 3) Si les deux sont apolaires, comparez leur masse molaire (polarisabilité).",
          commonMistakes:
            "Croire que les forces de London n'existent que chez les molécules apolaires. Les molécules polaires comme HCl ou H₂O possèdent AUSSI des forces de London, et celles-ci représentent souvent une part importante de l'énergie d'attraction globale !"
        },
        {
          id: 'sec-5-2',
          title: "Les états liquide et solide",
          pageNumber: 38,
          learningObjectives: [
            "Relier les forces intermoléculaires à la pression de vapeur saturante, à la viscosité et à la tension superficielle.",
            "Définir le point d'ébullition normal et comprendre l'équation de Clausius-Clapeyron.",
            "Distinguer les quatre grands types de solides cristallins (ioniques, moléculaires, métalliques, covalents réticulaires)."
          ],
          bodyMarkdown: [
            "Propriétés macroscopiques des liquides :",
            "• Pression de vapeur : C'est la pression exercée par les molécules gazeuses en équilibre dynamique avec leur liquide dans un récipient fermé à une température donnée. Plus les forces intermoléculaires sont fortes, plus il est difficile pour les molécules de s'échapper en phase gazeuse, et plus la pression de vapeur est BASSE. Une substance à faible force intermoléculaire s'évapore rapidement et est dite volatile.",
            "• Point d'ébullition normal : C'est la température à laquelle la pression de vapeur du liquide égale exactement la pression atmosphérique standard au niveau de la mer (101,3 kPa ou 1 atm). En altitude, la pression atmosphérique étant plus faible, l'eau bout à une température inférieure à 100 °C.",
            "• Viscosité et tension superficielle : La résistance à l'écoulement (viscosité) et l'énergie requise pour augmenter l'aire de surface (tension superficielle) croissent de pair avec l'intensité des forces intermoléculaires.",
            "Organisation des solides cristallins :",
            "1. Solides ioniques (ex. NaCl, MgO) : formés de cations et d'anions unis par de puissantes forces électrostatiques. Durs, cassants, points de fusion très élevés, isolants à l'état solide mais conducteurs à l'état fondu.",
            "2. Solides moléculaires (ex. glace H₂O, saccharose C₁₂H₂₂O₁₁, I₂) : constitués de molécules unies par des forces intermoléculaires (London, dipôle-dipôle, ponts H). Mous, points de fusion bas (< 300 °C), isolants électriques.",
            "3. Solides métalliques (ex. Cu, Fe, Na) : formés d'ions métalliques positifs baignant dans une « mer » d'électrons délocalisés. Excellents conducteurs électriques et thermiques, ductiles et malléables.",
            "4. Solides covalents réticulaires (ex. diamant C, graphite C, quartz SiO₂) : réseau infini d'atomes unis par des liaisons covalentes extrêmement rigides. Dureté extrême, températures de fusion phénoménales (diamant : > 3500 °C)."
          ],
          keyFormulas: [
            {
              formula: "ln(P₂ / P₁) = -(ΔH_vap / R) · (1/T₂ - 1/T₁)",
              explanation: "Équation de Clausius-Clapeyron reliant la pression de vapeur à la température absolue et à la chaleur molaire de vaporisation."
            }
          ],
          collegeExamTip:
            "L'équation de Clausius-Clapeyron requiert OBLIGATOIREMENT les températures en kelvins (K = °C + 273,15) et la constante des gaz R = 8,314 J/(mol·K). Si ΔH_vap est donné en kJ/mol, convertissez-le impérativement en J/mol (× 1000) pour respecter la cohérence des unités !",
          commonMistakes:
            "Considérer le diamant ou le dioxyde de silicium SiO₂ comme un solide moléculaire. Le quartz est un solide covalent tridimensionnel géant, d'où son point de fusion de plus de 1600 °C."
        }
      ],
      exercises: [
        {
          id: 'ex-5-1',
          number: 8,
          title: "Prédiction des forces intermoléculaires et des points d'ébullition",
          statement:
            "On étudie quatre substances liquides à température ambiante :\n1) Le propane : CH₃-CH₂-CH₃ (masse molaire M = 44 g/mol)\n2) L'éthanal : CH₃-CHO (M = 44 g/mol)\n3) L'éthanol : CH₃-CH₂-OH (M = 46 g/mol)\n4) Le chlorure de sodium : NaCl (M = 58,5 g/mol)\na) Nommez pour chacune des quatre substances toutes les forces d'attraction intermoléculaires ou liaisons présentes à l'état pur.\nb) Classez ces quatre substances par ordre croissant de température d'ébullition en justifiant minutieusement votre raisonnement.",
          hints: [
            "Le propane est un hydrocarbure apolaire.",
            "L'éthanal possède un groupe carbonyle C=O polaire mais pas de liaison O-H.",
            "L'éthanol possède un groupe hydroxyle -OH."
          ],
          solutionSteps: [
            "Identification des forces :\n  - Propane (CH₃CH₂CH₃) : Molécule apolaire (liaisons C-C et C-H quasi apolaires). Uniquement des forces de dispersion de London.\n  - Éthanal (CH₃CHO) : Molécule polaire due à la liaison C=O (ΔÉN = 3,44 - 2,55 = 0,89). Présence de forces de dispersion de London et d'interactions dipôle-dipôle permanentes. Pas de pont H car l'hydrogène est lié au carbone, pas à l'oxygène.\n  - Éthanol (CH₃CH₂OH) : Molécule polaire avec une liaison O-H. Présence de forces de dispersion de London, d'interactions dipôle-dipôle et de puissantes liaisons hydrogène (intermoléculaires entre le groupe O-H et l'oxygène voisin).\n  - NaCl : Composé ionique formant un réseau cristallin tridimensionnel unissant des ions Na⁺ et Cl⁻ par de très fortes liaisons ioniques.",
            "Comparaison des températures d'ébullition :\n  - Le propane, n'ayant que de faibles forces de London, bout à une température très basse (-42 °C).\n  - L'éthanal, possédant en plus des forces dipôle-dipôle permanentes, bout plus haut (+20 °C).\n  - L'éthanol, stabilisé par de vigoureuses liaisons hydrogène, bout beaucoup plus haut (+78 °C).\n  - NaCl est un solide ionique dont l'ébullition exige de briser les liaisons électrostatiques du réseau réticulaire (Eb = 1465 °C).",
            "Ordre croissant final : Propane < Éthanal < Éthanol < NaCl."
          ],
          finalAnswer: "Propane (-42 °C) < Éthanal (20 °C) < Éthanol (78 °C) < NaCl (1465 °C).",
          difficulty: 'intermédiaire',
          tags: ['Forces intermoléculaires', 'Points d\'ébullition', 'Pont hydrogène', 'Composé ionique']
        }
      ]
    },
    {
      id: 'chapitre-6',
      moduleId: 'module-3',
      chapterNumber: 6,
      title: "Le comportement des gaz et les lois des gaz parfaits",
      summary:
        "Ce chapitre formalise les lois empiriques des gaz (Boyle, Charles, Gay-Lussac, Avogadro) aboutissant à l'équation d'état des gaz parfaits (PV = nRT). Il traite de la masse volumique et de la masse molaire des gaz, de la loi des pressions partielles de Dalton, et des mélanges gazeux recueillis sur l'eau.",
      startPage: 45,
      endPage: 52,
      sections: [
        {
          id: 'sec-6-1',
          title: "Les lois simples et l'équation des gaz parfaits",
          pageNumber: 45,
          learningObjectives: [
            "Énoncer et manipuler les lois de Boyle-Mariotte, de Charles, de Gay-Lussac et d'Avogadro.",
            "Appliquer l'équation d'état des gaz parfaits (PV = nRT) avec les unités appropriées du Système international et usuelles.",
            "Distinguer les conditions TPN (0 °C, 101,3 kPa) et TAPN (25 °C, 100 kPa ou 101,3 kPa) et le volume molaire correspondant."
          ],
          bodyMarkdown: [
            "Un gaz parfait est un modèle théorique dans lequel :",
            "• Les particules gazeuses possèdent un volume propre négligeable par rapport au volume total du récipient.",
            "• Il n'existe aucune force d'attraction ou de répulsion intermoléculaire entre les particules.",
            "• Les collisions entre particules et avec les parois sont parfaitement élastiques (conservation totale de l'énergie cinétique).",
            "Ce modèle décrit avec une excellente précision les gaz réels à basse pression et température modérée ou élevée.",
            "Les quatre lois empiriques fondamentales :",
            "1. Loi de Boyle-Mariotte (T et n constants) : Le volume est inversement proportionnel à la pression : P₁ · V₁ = P₂ · V₂.",
            "2. Loi de Charles (P et n constants) : Le volume est directement proportionnel à la température absolue (en kelvins) : V₁ / T₁ = V₂ / T₂.",
            "3. Loi de Gay-Lussac (V et n constants) : La pression est directement proportionnelle à la température absolue : P₁ / T₁ = P₂ / T₂.",
            "4. Loi d'Avogadro (P et T constants) : Des volumes égaux de gaz différents contiennent le même nombre de moles : V₁ / n₁ = V₂ / n₂.",
            "L'équation des gaz parfaits unifie ces relations : P · V = n · R · T, où :",
            "• P = pression (en kPa si R = 8,314 kPa·L/(mol·K), ou en Pa si V est en m³ et R = 8,314 J/(mol·K), ou en atm si R = 0,08206 atm·L/(mol·K)). Dans les collèges québécois, la valeur officielle du SI est généralement R = 8,314 kPa·L/(mol·K).",
            "• V = volume (en litres L).",
            "• n = quantité de matière (en moles).",
            "• T = température absolue en kelvins (T(K) = T(°C) + 273,15).",
            "Conditions de référence au Québec :",
            "• TPN (Température et Pression Normales) : T = 0 °C (273,15 K) et P = 101,325 kPa (1 atm). Le volume molaire d'un gaz parfait y est de Vm = 22,41 L/mol.",
            "• TAPN (Température Ambiante et Pression Normale) : T = 25 °C (298,15 K) et P = 101,325 kPa (ou 100 kPa selon les manuels). Le volume molaire y est de Vm = 24,45 L/mol (ou 24,79 L/mol à 100 kPa)."
          ],
          keyFormulas: [
            {
              formula: "P · V = n · R · T",
              explanation: "Équation d'état des gaz parfaits (R = 8,314 kPa·L/(mol·K) = 8,314 J/(mol·K) = 0,08206 atm·L/(mol·K))."
            },
            {
              formula: "M = (m · R · T) / (P · V) = (ρ · R · T) / P",
              explanation: "Masse molaire d'un gaz en fonction de sa masse volumique ρ = m/V."
            }
          ],
          collegeExamTip:
            "Ne calculez JAMAIS avec une température en degrés Celsius ! Même si une variation de température ΔT est identique en Celsius et en Kelvin, l'équation PV = nRT exige impérativement la température absolue T en Kelvin. Une omission fréquente est d'insérer 25 au lieu de 298,15 K.",
          commonMistakes:
            "Mélanger les unités de la constante R : si vous utilisez la pression en kPa, le volume doit être en litres pour employer R = 8,314."
        },
        {
          id: 'sec-6-2',
          title: "Mélanges de gaz et loi des pressions partielles de Dalton",
          pageNumber: 48,
          learningObjectives: [
            "Définir la pression partielle d'un gaz au sein d'un mélange gazeux.",
            "Appliquer la loi de Dalton : P_totale = Σ P_i et relier la pression partielle à la fraction molaire.",
            "Calculer la quantité de gaz pur lors d'une collecte sur l'eau en retranchant la pression de vapeur d'eau."
          ],
          bodyMarkdown: [
            "Dans un mélange de gaz n'ayant pas de réaction chimique entre eux, les particules de chaque gaz se comportent indépendamment les unes des autres.",
            "Loi des pressions partielles de Dalton : La pression totale exercée par un mélange gazeux est égale à la somme des pressions partielles que chaque gaz exercerait s'il occupait seul la totalité du volume du récipient à la même température : P_totale = P₁ + P₂ + P₃ + ... = Σ P_i.",
            "Fraction molaire (x_i) : La fraction molaire d'un gaz i représente le rapport entre le nombre de moles de ce gaz et le nombre total de moles de gaz dans le mélange : x_i = n_i / n_total. La somme de toutes les fractions molaires est toujours égale à 1 (Σ x_i = 1).",
            "Relation fondamentale de Dalton : P_i = x_i · P_totale. La pression partielle d'un gaz est directement proportionnelle à sa fraction molaire.",
            "Collecte d'un gaz sur l'eau (déplacement d'eau) : Au laboratoire de chimie collégiale, un gaz peu soluble généré par une réaction chimique est souvent recueilli par déplacement d'eau dans une éprouvette graduée inversée. Le gaz ainsi collecté est inévitablement saturé en vapeur d'eau.",
            "Selon la loi de Dalton : P_totale = P_gaz_sec + P_vapeur_eau. Pour obtenir la pression exacte du gaz sec étudié, on doit soustraire la pression de vapeur d'eau (qui ne dépend que de la température et se trouve dans les tables physico-chimiques) de la pression atmosphérique mesurée : P_gaz_sec = P_barométrique - P_H₂O(T)."
          ],
          keyFormulas: [
            {
              formula: "P_totale = Σ P_i = (n_total · R · T) / V",
              explanation: "Loi des pressions partielles de Dalton."
            },
            {
              formula: "P_i = x_i · P_totale  avec  x_i = n_i / n_total",
              explanation: "Calcul de la pression partielle via la fraction molaire."
            },
            {
              formula: "P_gaz_sec = P_totale - P_H₂O(T)",
              explanation: "Correction de pression lors de la collecte d'un gaz sur cuve à eau."
            }
          ],
          collegeExamTip:
            "Dans les problèmes d'examen où un gaz est « recueilli sur l'eau », repérez immédiatement la température de l'eau et cherchez dans l'énoncé la pression de vapeur d'eau correspondante. Si vous oubliez de la soustraire de la pression totale avant de calculer n avec PV=nRT, tout le reste de votre calcul de stœchiométrie sera faux !",
          commonMistakes:
            "Utiliser la masse totale au lieu des moles pour calculer la fraction molaire. La fraction molaire est un rapport de moles (n_i / n_tot), jamais un rapport de masses en grammes."
        }
      ],
      exercises: [
        {
          id: 'ex-6-1',
          number: 9,
          title: "Collecte de dihydrogène sur l'eau et loi des gaz parfaits",
          statement:
            "Un étudiant de cégep fait réagir un ruban de magnésium avec un excès d'acide chlorhydrique : Mg(s) + 2 HCl(aq) → MgCl₂(aq) + H₂(g).\nLe gaz dihydrogène produit est recueilli par déplacement d'eau à une température de 22,0 °C. Le volume de gaz mesuré dans l'éprouvette est de 245 mL. La pression barométrique du laboratoire est de 100,8 kPa. À 22,0 °C, la pression de vapeur de l'eau est de 2,64 kPa.\na) Calculez la pression partielle du dihydrogène sec (en kPa).\nb) Déterminez la quantité de matière (en moles) de H₂(g) produite.\nc) Quelle masse (en milligrammes) de magnésium métallique a réagi ?",
          hints: [
            "P_H₂ = P_baro - P_vapeur_eau.",
            "Convertissez le volume en litres (245 mL = 0,245 L) et la température en Kelvin (22,0 + 273,15 = 295,15 K).",
            "La masse molaire du magnésium est de 24,31 g/mol."
          ],
          solutionSteps: [
            "Pression du dihydrogène sec : P(H₂) = P_totale - P_H₂O = 100,8 kPa - 2,64 kPa = 98,16 kPa.",
            "Quantité de matière de H₂ : On utilise PV = nRT avec R = 8,314 kPa·L/(mol·K). T = 22,0 + 273,15 = 295,15 K. V = 0,245 L.\nn(H₂) = (P · V) / (R · T) = (98,16 kPa × 0,245 L) / (8,314 kPa·L/(mol·K) × 295,15 K) = 24,049 / 2453,88 = 9,80 × 10⁻³ mol = 0,00980 mol.",
            "Masse de magnésium ayant réagi : D'après l'équation chimique équilibrée, 1 mole de Mg produit 1 mole de H₂ (rapport stœchiométrique 1:1). Donc n(Mg) = n(H₂) = 9,80 × 10⁻³ mol.\nm(Mg) = n(Mg) × M(Mg) = 9,80 × 10⁻³ mol × 24,31 g/mol = 0,2382 g = 238,2 mg."
          ],
          finalAnswer: "P(H₂) = 98,16 kPa ; n(H₂) = 9,80 × 10⁻³ mol ; Masse de Mg = 238 mg.",
          difficulty: 'intermédiaire',
          tags: ['Gaz parfaits', 'Collecte sur eau', 'Dalton', 'Stœchiométrie gazeuse']
        }
      ]
    }
  ]
};
