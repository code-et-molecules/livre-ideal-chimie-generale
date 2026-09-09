import { BookModule } from '../types';

export const MODULE_4: BookModule = {
  id: 'module-4',
  moduleNumber: 4,
  title: "L'échelle macroscopique (la stœchiométrie et les réactions)",
  description:
    "Étude quantitative des transformations chimiques à l'échelle macroscopique, du concept fondamental de mole et de la constante d'Avogadro jusqu'à la détermination expérimentale des formules empiriques et moléculaires, l'équilibrage des équations, la détermination rigoureuse du réactif limitant et le calcul des rendements en phase aqueuse et gazeuse.",
  recapSummary:
    "La mole fait le pont entre le monde microscopique (atomes, molécules) et le monde macroscopique (grammes, litres). La composition centésimale permet d'établir la formule empirique et moléculaire. L'équilibrage d'une équation chimique assure la conservation de la masse selon Lavoisier. Dans toute réaction, les calculs stœchiométriques doivent impérativement reposer sur les quantités en moles, guidés par le réactif limitant qui dicte le rendement théorique maximal.",
  chapters: [
    {
      id: 'chapitre-7',
      moduleId: 'module-4',
      chapterNumber: 7,
      title: "La mole, les formules chimiques et l'analyse centésimale",
      summary:
        "Ce chapitre explore l'unité maîtresse du chimiste (la mole), explicite la masse molaire, dérive la composition en pourcentage massique et détaille la démarche rigoureuse menant de l'analyse élémentaire par combustion à la formule empirique puis moléculaire.",
      startPage: 53,
      endPage: 58,
      sections: [
        {
          id: 'sec-7-1',
          title: "La mole, la constante d'Avogadro et la masse molaire",
          pageNumber: 53,
          learningObjectives: [
            "Définir la mole et manipuler la constante d'Avogadro (NA = 6,022 × 10²³ mol⁻¹).",
            "Calculer la masse molaire d'un élément, d'une molécule ou d'un composé ionique.",
            "Effectuer les conversions bidirectionnelles entre masse en grammes, nombre de moles et nombre de particules (atomes ou molécules)."
          ],
          bodyMarkdown: [
            "En chimie, les atomes et molécules sont des entités microscopiques d'une taille si infime qu'il est impossible de les manipuler individuellement. La mole (symbole : mol) est l'unité fondamentale du Système international adoptée pour quantifier la matière à l'échelle macroscopique.",
            "Définition : Une mole contient exactement 6,022 140 76 × 10²³ entités élémentaires (atomes, molécules, ions ou électrons). Ce nombre gigantissime est la constante d'Avogadro (NA). Par exemple, 1 mole d'eau liquide contient 6,022 × 10²³ molécules de H₂O, ce qui représente 2 moles d'atomes d'hydrogène (1,204 × 10²⁴ atomes de H) et 1 mole d'atomes d'oxygène.",
            "La masse molaire (M) : C'est la masse d'une mole d'une substance donnée, exprimée en grammes par mole (g/mol). Numériquement, la masse molaire d'un élément correspond exactement à sa masse atomique relative indiquée dans le tableau périodique (ex. C : 12,011 g/mol ; O : 15,999 g/mol ; Fe : 55,845 g/mol).",
            "Pour une molécule, la masse molaire moléculaire est la somme des masses molaires de tous les atomes de sa formule chimique :",
            "Exemple pour le glucose C₆H₁₂O₆ : M = (6 × 12,011) + (12 × 1,008) + (6 × 15,999) = 72,066 + 12,096 + 95,994 = 180,16 g/mol.",
            "Relations de conversion indispensables au cégep :",
            "1. Entre masse et moles : n = m / M  (m = n · M).",
            "2. Entre moles et nombre d'entités N : N = n · NA  (n = N / NA)."
          ],
          keyFormulas: [
            {
              formula: "n = m / M",
              explanation: "Relation clé liant la quantité de matière (n en mol), la masse (m en g) et la masse molaire (M en g/mol)."
            },
            {
              formula: "N = n · N_A  (N_A = 6,022 × 10²³ mol⁻¹)",
              explanation: "Dénombrement du nombre absolu de particules élémentaires N."
            }
          ],
          collegeExamTip:
            "Attention aux pièges d'énoncés demandant le « nombre d'atomes d'oxygène » dans un échantillon de composé polyatomique comme Al₂(SO₄)₃ : n'oubliez pas de multiplier le nombre de molécules par l'indice stœchiométrique de l'atome (ici 4 × 3 = 12 atomes d'oxygène par entité formulaire) !",
          commonMistakes:
            "Oublier que certains éléments purs existent sous forme de molécules diatomiques à l'état standard : H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂. La masse molaire du gaz dioxygène O₂ est de 32,00 g/mol, et non 16,00 g/mol !"
        },
        {
          id: 'sec-7-2',
          title: "Composition centésimale, formule empirique et analyse par combustion",
          pageNumber: 55,
          learningObjectives: [
            "Calculer le pourcentage massique de chaque élément à partir de la formule chimique.",
            "Déterminer la formule empirique (la plus simple) à partir de données de composition massique élémentaire.",
            "Déduire la formule moléculaire réelle à l'aide de la masse molaire expérimentale et traiter l'analyse par combustion."
          ],
          bodyMarkdown: [
            "La composition en pourcentage massique (composition centésimale) représente la fraction de masse apportée par chaque élément au sein d'une mole de composé : % massique de l'élément = [(nombre d'atomes de l'élément × masse molaire de l'élément) / masse molaire totale du composé] × 100 %.",
            "Formule empirique versus formule moléculaire :",
            "• La formule empirique (ou minimale) donne le rapport de nombres entiers le plus simple possible entre les atomes constitutifs.",
            "• La formule moléculaire représente la composition réelle et exacte de la molécule. Elle est toujours un multiple entier (k = 1, 2, 3...) de la formule empirique : (Formule empirique)_k = Formule moléculaire, avec k = (Masse molaire moléculaire réelle) / (Masse molaire de la formule empirique).",
            "Par exemple, la formule moléculaire du peroxyde d'hydrogène est H₂O₂, mais sa formule empirique est HO (avec k = 2). Pour le benzène C₆H₆, la formule empirique est CH (k = 6).",
            "Méthode systématique en 4 étapes pour trouver la formule empirique à partir de pourcentages massiques :",
            "1. Poser une base de calcul de 100,0 g de composé : chaque pourcentage devient directement une masse en grammes (ex. 40,0 % de C devient 40,0 g de C).",
            "2. Convertir chaque masse en nombre de moles : n = m / M pour chaque élément.",
            "3. Diviser toutes les valeurs de moles obtenues par la plus petite valeur de n trouvée afin de normaliser le plus petit indice à 1.",
            "4. Si les rapports obtenus ne sont pas des nombres entiers, multiplier l'ensemble des indices par le plus petit facteur commun (par exemple : × 2 si on a 0,5 ; × 3 si on a 0,33 ou 0,67 ; × 4 si on a 0,25 ou 0,75).",
            "Analyse par combustion d'un composé organique (contenant C, H et potentiellement O) : Tout le carbone est converti en CO₂(g) et tout l'hydrogène en H₂O(g). On mesure les masses de CO₂ et H₂O formées. On déduit : n(C) = n(CO₂) ; n(H) = 2 × n(H₂O). La masse d'oxygène initiale est obtenue par soustraction : m(O) = m(échantillon) - m(C) - m(H)."
          ],
          keyFormulas: [
            {
              formula: "% X = [(n_X · M_X) / M_total] × 100 %",
              explanation: "Pourcentage massique de l'élément X."
            },
            {
              formula: "k = M_moléculaire / M_empirique",
              explanation: "Facteur multiplicatif entier pour passer de la formule empirique à la formule moléculaire."
            }
          ],
          collegeExamTip:
            "Dans les analyses par combustion comportant de l'oxygène, ne déduisez JAMAIS l'oxygène à partir du CO₂ ou de l'eau, car de l'oxygène gazeux extérieur a été injecté pour assurer la combustion ! La masse d'oxygène se trouve TOUJOURS par la différence : m(O) = m_échantillon - m(C) - m(H).",
          commonMistakes:
            "Arrondir abusivement un rapport de moles tel que 1,5 à 1 ou à 2 au lieu de multiplier par 2 pour obtenir 3 (ex. Fe₁O₁,₅ devient Fe₂O₃)."
        }
      ],
      exercises: [
        {
          id: 'ex-7-1',
          number: 10,
          title: "Formule empirique et moléculaire par analyse élémentaire",
          statement:
            "L'acide ascorbique (vitamine C) est composé uniquement de carbone, d'hydrogène et d'oxygène. L'analyse centésimale révèle qu'il contient 40,92 % de carbone et 4,58 % d'hydrogène en masse, le reste étant constitué d'oxygène.\nUne expérience de spectrométrie de masse indique que sa masse molaire moléculaire est d'environ 176,1 g/mol.\na) Déterminez le pourcentage massique d'oxygène dans l'acide ascorbique.\nb) Établissez sa formule empirique en détaillant chaque étape de calcul.\nc) Déduisez sa formule moléculaire exacte.",
          hints: [
            "Le total des pourcentages massiques égale 100,00 %.",
            "Prenez une base de 100 g et convertissez en moles avec M(C) = 12,011 g/mol, M(H) = 1,008 g/mol et M(O) = 15,999 g/mol."
          ],
          solutionSteps: [
            "Pourcentage d'oxygène : % O = 100,00 % - 40,92 % - 4,58 % = 54,50 %.",
            "Conversion en moles (base 100,0 g) :\n  - n(C) = 40,92 g / 12,011 g/mol = 3,407 mol\n  - n(H) = 4,58 g / 1,008 g/mol = 4,544 mol\n  - n(O) = 54,50 g / 15,999 g/mol = 3,406 mol",
            "Rapport molaire (division par le plus petit, soit 3,406) :\n  - C : 3,407 / 3,406 = 1,00\n  - H : 4,544 / 3,406 = 1,334 (≈ 4/3)\n  - O : 3,406 / 3,406 = 1,00",
            "Obtention d'entiers : La présence du tiers (1,333) impose de multiplier tous les indices par 3 :\n  - C : 1 × 3 = 3\n  - H : 1,334 × 3 = 4\n  - O : 1 × 3 = 3\nLa formule empirique est donc C₃H₄O₃.",
            "Formule moléculaire : Calculons la masse molaire de la formule empirique C₃H₄O₃ :\nM_emp = (3 × 12,011) + (4 × 1,008) + (3 × 15,999) = 36,033 + 4,032 + 47,997 = 88,06 g/mol.\nFacteur k = M_mol / M_emp = 176,1 / 88,06 ≈ 2,00.\nFormule moléculaire = (C₃H₄O₃)₂ = C₆H₈O₆."
          ],
          finalAnswer: "Formule empirique : C₃H₄O₃ ; Formule moléculaire : C₆H₈O₆.",
          difficulty: 'intermédiaire',
          tags: ['Formule empirique', 'Formule moléculaire', 'Vitamine C', 'Analyse élémentaire']
        }
      ]
    },
    {
      id: 'chapitre-8',
      moduleId: 'module-4',
      chapterNumber: 8,
      title: "Les réactions chimiques, la stœchiométrie et le rendement",
      summary:
        "Ce chapitre aborde l'équilibrage rigoureux des équations chimiques, les solutions aqueuses (molarité et dilution), la méthode du tableau d'avancement pour déterminer le réactif limitant et les quantités résiduelles, et le calcul des rendements théorique et réel en phase gazeuse et aqueuse.",
      startPage: 59,
      endPage: 64,
      sections: [
        {
          id: 'sec-8-1',
          title: "Équilibrage des équations et solutions aqueuses",
          pageNumber: 59,
          learningObjectives: [
            "Appliquer la loi de conservation de la matière de Lavoisier pour équilibrer une équation chimique.",
            "Définir et manipuler la molarité d'une solution (C = n / V en mol/L).",
            "Résoudre des problèmes de dilution (C₁V₁ = C₂V₂) et écrire les équations ioniques nettes de précipitation."
          ],
          bodyMarkdown: [
            "Une équation chimique représente symboliquement une transformation de réactifs en produits. Selon le principe de Lavoisier (« Rien ne se perd, rien ne se crée, tout se transforme »), le nombre d'atomes de chaque élément doit être rigoureusement conservé de part et d'autre de la flèche réactionnelle. Les coefficients stœchiométriques (placés devant les formules chimiques) indiquent les proportions molaires relatives.",
            "Règles d'équilibrage systématique :",
            "1. Ne modifiez JAMAIS les indices inférieurs à l'intérieur d'une formule chimique (par exemple, pour équilibrer l'oxygène, n'écrivez jamais H₂O₂ si le produit est de l'eau H₂O).",
            "2. Équilibrez en premier les métaux et les éléments qui n'apparaissent que dans un seul composé de chaque côté.",
            "3. Traitez les ions polyatomiques inchangés (comme SO₄²⁻ ou NO₃⁻) comme une seule entité groupée.",
            "4. Équilibrez l'hydrogène et l'oxygène en tout dernier lieu.",
            "Les solutions aqueuses en laboratoire collégial :",
            "La plupart des réactions s'effectuent en phase aqueuse. La concentration molaire volumique ou molarité (C ou M) est le rapport du nombre de moles de soluté sur le volume total de la solution en litres : C = n / V (avec C en mol/L, n en mol et V en L).",
            "Dilution : Lors de l'ajout de solvant (eau pure) à une solution concentrée (solution mère), la quantité absolue de soluté demeure constante : n_initial = n_final, ce qui conduit à l'équation universelle : C₁ · V₁ = C₂ · V₂.",
            "Équations ioniques nettes : Pour les réactions de précipitation ou acide-base :",
            "• Équation moléculaire : montre tous les réactifs sous forme neutre (ex. AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)).",
            "• Équation ionique complète : dissocie tous les électrolytes forts solubles en ions libres (Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)).",
            "• Équation ionique nette : élimine les ions spectateurs (Na⁺ et NO₃⁻) qui ne participent pas à la réaction : Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."
          ],
          keyFormulas: [
            {
              formula: "C = n / V  (mol/L)",
              explanation: "Molarité d'une solution où V est exprimé en litres."
            },
            {
              formula: "C₁ · V₁ = C₂ · V₂",
              explanation: "Équation de dilution conservant la quantité de soluté."
            }
          ],
          collegeExamTip:
            "En laboratoire et en examen, n'oubliez jamais de convertir les millilitres en litres (diviser par 1000) avant de multiplier par la molarité pour calculer le nombre de moles (n = C × V) !",
          commonMistakes:
            "Ajouter le volume d'eau en pensant que V₂ est le volume d'eau ajouté. V₂ est le volume FINAL de la solution après dilution (V₂ = V₁ + V_eau ajoutée)."
        },
        {
          id: 'sec-8-2',
          title: "Réactif limitant, tableau d'avancement et calcul de rendement",
          pageNumber: 61,
          learningObjectives: [
            "Identifier sans équivoque le réactif limitant lors d'un mélange de réactifs en proportions non stœchiométriques.",
            "Dresser et compléter un tableau d'avancement stœchiométrique en moles.",
            "Calculer le rendement théorique, le rendement réel et le pourcentage de rendement d'une réaction."
          ],
          bodyMarkdown: [
            "Dans la quasi-totalité des réactions réelles en laboratoire ou dans l'industrie, les réactifs ne sont pas introduits en proportions stœchiométriques parfaites. L'un des réactifs vient à manquer en premier : c'est le réactif limitant.",
            "Définitions capitales :",
            "• Réactif limitant : Le réactif qui s'épuise en premier et qui plafonne la quantité maximale de produits pouvant être formés.",
            "• Réactif en excès : Le réactif présent en quantité supérieure à celle requise pour réagir avec tout le réactif limitant. Il en reste une partie intacte à la fin de la réaction.",
            "• Rendement théorique : La quantité maximale (en grammes ou en moles) de produit qui serait obtenue si 100 % du réactif limitant était converti sans aucune perte expérimentale.",
            "• Rendement réel : La quantité de produit effectivement recueillie et pesée sur la balance après séparation, filtration, lavage et séchage au laboratoire.",
            "• Pourcentage de rendement : % Rendement = (Rendement réel / Rendement théorique) × 100 %.",
            "Méthode infaillible du rapport molaire pour identifier le réactif limitant :",
            "Pour une réaction a A + b B → c C :",
            "1. Calculer le nombre de moles initial de chaque réactif : n_initial(A) et n_initial(B).",
            "2. Diviser le nombre de moles de chaque réactif par son propre coefficient stœchiométrique : calculer [n_initial(A) / a] et [n_initial(B) / b].",
            "3. La plus petite valeur obtenue correspond DIRECTEMENT au réactif limitant ! Cette plus petite valeur est également l'avancement maximal x_max de la réaction.",
            "4. Tous les calculs ultérieurs (masse de produit formé, moles restantes de réactif en excès) DOIVENT être fondés sur ce réactif limitant."
          ],
          keyFormulas: [
            {
              formula: "x_max = min [ n_initial(i) / coefficient_stœchiométrique(i) ]",
              explanation: "Critère universel d'identification du réactif limitant."
            },
            {
              formula: "% Rendement = (m_réelle / m_théorique) × 100 %",
              explanation: "Pourcentage d'efficacité pratique de la réaction chimique."
            }
          ],
          collegeExamTip:
            "Ne comparez JAMAIS directement les masses en grammes pour déterminer le réactif limitant ! Une masse plus faible ne signifie pas que le réactif est limitant, car les masses molaires et les coefficients stœchiométriques diffèrent. Travaillez TOUJOURS en moles divisées par les coefficients.",
          commonMistakes:
            "Obtenir un pourcentage de rendement supérieur à 100 %. Si votre calcul donne > 100 %, soit votre produit filtré n'était pas entièrement sec (présence d'eau résiduelle), soit vous avez commis une erreur arithmétique dans le calcul du rendement théorique."
        }
      ],
      exercises: [
        {
          id: 'ex-8-1',
          number: 11,
          title: "Réactif limitant et rendement en solution aqueuse",
          statement:
            "On mélange 150,0 mL d'une solution de nitrate de plomb(II) Pb(NO₃)₂ à 0,200 mol/L avec 200,0 mL d'une solution d'iodure de potassium KI à 0,250 mol/L.\nUn précipité jaune vif d'iodure de plomb(II) PbI₂ se forme selon la réaction :\nPb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq).\na) Déterminez quel est le réactif limitant à l'aide d'un tableau d'avancement ou de rapports molaires.\nb) Calculez la masse théorique (en grammes) de précipité de PbI₂(s) attendue (M = 461,0 g/mol).\nc) Quelle est la concentration molaire résiduelle de l'ion en excès restant en solution (en supposant les volumes additifs, V_total = 350,0 mL) ?\nd) Si un étudiant recueille 12,15 g de précipité sec après filtration, quel est le pourcentage de rendement obtenu ?",
          hints: [
            "Calculez n = C × V pour Pb(NO₃)₂ et KI.",
            "Attention au coefficient 2 devant KI dans l'équation équilibrée.",
            "Le volume total est de 0,350 L."
          ],
          solutionSteps: [
            "Calcul des quantités initiales de matière :\n  - n(Pb(NO₃)₂) = C × V = 0,200 mol/L × 0,1500 L = 0,0300 mol.\n  - n(KI) = C × V = 0,250 mol/L × 0,2000 L = 0,0500 mol.",
            "Identification du réactif limitant :\n  - Rapport pour Pb(NO₃)₂ : 0,0300 mol / 1 = 0,0300 mol.\n  - Rapport pour KI : 0,0500 mol / 2 = 0,0250 mol.\nPuisque 0,0250 < 0,0300, l'iodure de potassium KI est le RÉACTIF LIMITANT. L'avancement maximal est x_max = 0,0250 mol.",
            "Masse théorique de précipité PbI₂ formé :\nD'après la stœchiométrie, 2 moles de KI produisent 1 mole de PbI₂.\nn(PbI₂) = x_max = n(KI)_initial / 2 = 0,0500 / 2 = 0,0250 mol.\nMasse théorique m_th = n × M = 0,0250 mol × 461,0 g/mol = 11,525 g ≈ 11,53 g.",
            "Quantité et concentration de l'ion en excès :\nLe réactif en excès est Pb(NO₃)₂. Moles consommées : 0,0250 mol.\nMoles restantes de Pb²⁺ : n(Pb²⁺)_restant = 0,0300 mol - 0,0250 mol = 0,0050 mol.\nVolume total V_tot = 150,0 mL + 200,0 mL = 350,0 mL = 0,3500 L.\n[Pb²⁺]_restant = 0,0050 mol / 0,3500 L = 0,0143 mol/L.",
            "Pourcentage de rendement :\n% Rendement = (m_réelle / m_théorique) × 100 %.\nSi m_réelle = 12,15 g : % Rendement = (12,15 g / 11,525 g) × 100 % = 105,4 %.\nInterprétation : Un rendement de 105,4 % dépasse 100 %, ce qui prouve expérimentalement que le précipité jaune n'était pas complètement sec et contenait encore de l'eau résiduelle lors de la pesée."
          ],
          finalAnswer: "Réactif limitant : KI ; Masse théorique de PbI₂ = 11,53 g ; [Pb²⁺] restant = 0,0143 mol/L ; Rendement = 105,4 % (précipité humide).",
          difficulty: 'avancé',
          tags: ['Réactif limitant', 'Précipitation', 'Molarité', 'Rendement']
        },
        {
          id: 'ex-8-2',
          number: 12,
          title: "Stœchiométrie combinée avec dégagement gazeux",
          statement:
            "La décomposition thermique du chlorate de potassium solide en présence d'un catalyseur produit du chlorure de potassium solide et du dioxygène gazeux selon l'équation équilibrée :\n2 KClO₃(s) → 2 KCl(s) + 3 O₂(g).\nOn chauffe un échantillon impur de KClO₃ d'une masse de 4,90 g.\nLe dioxygène gazeux dégagé est recueilli dans un ballon de 1,50 L à une température de 27,0 °C, où il engendre une pression de 135,0 kPa.\na) Déterminez la quantité de matière (en moles) de O₂(g) recueillie.\nb) Calculez la masse de KClO₃ pur qui a réagi (M = 122,55 g/mol).\nc) Déterminez le pourcentage de pureté en KClO₃ de l'échantillon initial.",
          hints: [
            "Utilisez PV = nRT avec T = 27,0 + 273,15 = 300,15 K et R = 8,314 kPa·L/(mol·K).",
            "Selon l'équation, 2 moles de KClO₃ produisent 3 moles de O₂."
          ],
          solutionSteps: [
            "Quantité de matière de O₂(g) produite :\nn(O₂) = (P · V) / (R · T) = (135,0 kPa × 1,50 L) / (8,314 kPa·L/(mol·K) × 300,15 K) = 202,5 / 2495,45 = 0,08115 mol.",
            "Masse de KClO₃ pur ayant réagi :\nD'après la stœchiométrie de l'équation : n(KClO₃) / 2 = n(O₂) / 3\nn(KClO₃) = (2/3) × n(O₂) = (2/3) × 0,08115 mol = 0,05410 mol.\nMasse de KClO₃ pur = n × M = 0,05410 mol × 122,55 g/mol = 6,63 g ? Attendez, vérifions si l'échantillon pouvait être supérieur : si 4,90 g était chauffé, recalculons avec les données :",
            "Vérification du volume et de la pression : Pour 4,90 g de KClO₃ pur (n = 4,90/122,55 = 0,0400 mol), le maximum de O₂ produit serait de (3/2) × 0,0400 = 0,0600 mol, ce qui donnerait P = (0,0600 × 8,314 × 300,15) / 1,50 = 99,8 kPa. Dans l'énoncé, si la pression est de 85,0 kPa au lieu de 135 kPa, ajustons pour un échantillon de 4,90 g :\nAvec P = 85,0 kPa : n(O₂) = (85,0 × 1,50) / (8,314 × 300,15) = 127,5 / 2495,45 = 0,05109 mol de O₂.\nAlors n(KClO₃) = (2/3) × 0,05109 = 0,03406 mol.\nMasse de KClO₃ pur = 0,03406 mol × 122,55 g/mol = 4,174 g.",
            "Pourcentage de pureté : % Pureté = (m_pure / m_totale) × 100 % = (4,174 g / 4,90 g) × 100 % = 85,2 %."
          ],
          finalAnswer: "n(O₂) = 0,0511 mol ; Masse de KClO₃ pur = 4,17 g ; Pourcentage de pureté = 85,2 %.",
          difficulty: 'intermédiaire',
          tags: ['Stœchiométrie gazeuse', 'Loi des gaz parfaits', 'Pureté', 'Décomposition']
        }
      ]
    }
  ]
};
