import { BookModule } from '../types';

export const MODULE_1: BookModule = {
  id: 'module-1',
  moduleNumber: 1,
  title: "L'échelle sous-microscopique (l'atome et les éléments)",
  description:
    "Étude approfondie de la constitution intime de la matière, des modèles atomiques historiques jusqu'à la mécanique quantique, des configurations électroniques et des tendances périodiques fondamentales du programme québécois de chimie générale (202-NYA-05).",
  recapSummary:
    "L'atome est constitué d'un noyau dense (protons et neutrons) entouré d'électrons décrits par des fonctions d'onde quantiques. Les quatre nombres quantiques (n, l, ml, ms) dictent l'agencement électronique selon Aufbau, Pauli et Hund. La charge nucléaire effective (Zeff) et l'effet d'écran expliquent les variations régulières du rayon atomique, de l'énergie d'ionisation et de l'électronégativité à travers les périodes et les familles du tableau périodique.",
  chapters: [
    {
      id: 'chapitre-1',
      moduleId: 'module-1',
      chapterNumber: 1,
      title: "La structure de l'atome et la mécanique quantique",
      summary:
        "Ce chapitre retrace l'essor des modèles atomiques depuis Dalton jusqu'au modèle quantique probabiliste de Schrödinger, explicite les quatre nombres quantiques et détaille la configuration électronique des éléments neutres et des ions.",
      startPage: 1,
      endPage: 8,
      sections: [
        {
          id: 'sec-1-1',
          title: "Évolution historique des modèles atomiques",
          pageNumber: 1,
          learningObjectives: [
            "Distinguer les apports et les limites expérimentales des modèles de Dalton, Thomson, Rutherford et Bohr.",
            "Expliquer l'expérience de la feuille d'or de Rutherford et ses implications sur la compacité du noyau.",
            "Comprendre l'origine des spectres d'émission de raies de l'hydrogène selon le modèle quantifié de Bohr."
          ],
          bodyMarkdown: [
            "La compréhension de la matière à l'échelle sous-microscopique a franchi plusieurs étapes charnières au cours des deux derniers siècles. En 1803, John Dalton propose la première théorie atomique moderne : la matière est composée d'atomes sphériques, indivisibles et indestructibles, chaque élément chimique possédant des atomes de masse identique.",
            "En 1897, Joseph John Thomson découvre l'électron grâce à ses expériences sur les rayons cathodiques. Constatant que ces particules chargées négativement sont universelles à toute la matière, il conçoit le modèle du « pain aux raisins » (*plum pudding*), où les électrons baignent dans une sphère diffuse de charge positive.",
            "En 1911, Ernest Rutherford bombarde une feuille d'or d'une épaisseur de quelques micromètres par des particules alpha (noyaux d'hélium). À la surprise générale, si la vaste majorité des particules traversent sans déviation, une petite fraction (environ 1 sur 8 000) subit des déviations majeures, parfois supérieures à 90°. Rutherford en déduit que l'atome est essentiellement constitué de vide : toute la charge positive et la quasi-totalité de la masse sont concentrées dans un noyau central minuscule (de l'ordre de 10⁻¹⁵ m, comparé à 10⁻¹⁰ m pour l'atome entier).",
            "Cependant, selon l'électrodynamique classique de Maxwell, un électron orbitant autour d'un noyau devrait rayonner de l'énergie continue et s'écraser en une fraction de seconde sur le noyau. Niels Bohr résout ce paradoxe en 1913 en postulant que le moment cinétique de l'électron est quantifié : l'électron n'occupe que des orbites circulaires stationnaires d'énergie discrète, sans émettre de rayonnement.",
            "Lorsque l'électron effectue une transition entre deux niveaux énergétiques n_initial et n_final, il émet ou absorbe un photon d'énergie exactement égale à la différence : ΔE = h·ν = |E_final - E_initial|. Cette relation explique précisément la célèbre formule de Rydberg pour les séries de raies de l'hydrogène (séries de Lyman, Balmer et Paschen)."
          ],
          keyFormulas: [
            {
              formula: "E_n = -2,178 × 10⁻¹⁸ J · (Z² / n²)",
              explanation: "Énergie d'un niveau stationnaire de l'atome hydrogénoïde (n = 1, 2, 3...)."
            },
            {
              formula: "ΔE = h · ν = (h · c) / λ",
              explanation: "Relation de Planck-Einstein liant la variation d'énergie à la longueur d'onde du photon émis ou absorbé."
            }
          ],
          collegeExamTip:
            "Dans les examens collégiaux québécois, veillez à toujours convertir les nanomètres en mètres (1 nm = 10⁻⁹ m) avant d'appliquer la constante de Planck (h = 6,626 × 10⁻³⁴ J·s) et la vitesse de la lumière (c = 2,998 × 10⁸ m/s). De plus, une transition vers le bas (ex. n = 4 vers n = 2) correspond à une émission de photon (ΔE négatif pour l'atome, mais l'énergie du photon est toujours une valeur positive).",
          commonMistakes:
            "Confondre orbite (trajectoire déterministe au sens de Bohr) et orbitale (fonction d'onde tridimensionnelle probabiliste au sens de Schrödinger)."
        },
        {
          id: 'sec-1-2',
          title: "Le modèle ondulatoire et les nombres quantiques",
          pageNumber: 3,
          learningObjectives: [
            "Définir la dualité onde-corpuscule de Louis de Broglie et le principe d'incertitude d'Heisenberg.",
            "Attribuer et interpréter les quatre nombres quantiques (n, l, ml, ms) décrivant l'état d'un électron.",
            "Reconnaître les formes spatiales des orbitales s, p et d et localiser les plans nodaux."
          ],
          bodyMarkdown: [
            "En 1924, Louis de Broglie avance l'hypothèse audacieuse que toute particule matérielle en mouvement possède une longueur d'onde associée : λ = h / (m·v). Pour un électron dont la masse est infime (9,109 × 10⁻³¹ kg), cette longueur d'onde est comparable aux dimensions atomiques, rendant les effets ondulatoires prépondérants.",
            "En 1927, Werner Heisenberg formule le principe d'incertitude : il est physiquement impossible de déterminer simultanément avec une précision absolue la position (x) et la quantité de mouvement (p) d'une particule : Δx · Δp ≥ h / (4π). On abandonne ainsi la notion d'orbite déterministe pour adopter le concept d'orbitale atomique, définie comme une fonction d'onde spatiale ψ(r, θ, φ) dont le carré |ψ|² représente la densité de probabilité de présence de l'électron.",
            "L'équation de Schrödinger permet de dériver quatre nombres quantiques régissant chaque état électronique possible :",
            "1. Le nombre quantique principal (n) : entier strictement positif (1, 2, 3...), il définit la couche électronique, la taille moyenne de l'orbitale et le niveau d'énergie principal.",
            "2. Le nombre quantique du moment angulaire ou secondaire (l) : entier compris entre 0 et n - 1. Il détermine la géométrie spatiale de l'orbitale (l = 0 : orbitale s sphérique ; l = 1 : orbitale p bilobée ; l = 2 : orbitale d à quatre lobes ; l = 3 : orbitale f).",
            "3. Le nombre quantique magnétique (ml) : entier variant de -l à +l. Il quantifie l'orientation spatiale de l'orbitale dans l'espace. Pour une sous-couche p (l = 1), il y a 3 orbitales (px, py, pz) correspondant à ml = -1, 0, +1.",
            "4. Le nombre quantique de spin (ms) : propre à l'électron, il ne découle pas directement de la géométrie spatiale mais du moment magnétique intrinsèque de la particule. Il prend uniquement les valeurs +1/2 ou -1/2."
          ],
          keyFormulas: [
            {
              formula: "λ = h / (m · v)",
              explanation: "Longueur d'onde de de Broglie pour une particule de masse m se déplaçant à la vitesse v."
            },
            {
              formula: "Nombre d'orbitales par couche n = n² ; capacité maximale = 2n² électrons",
              explanation: "Pour n = 3, il existe 9 orbitales (une 3s, trois 3p, cinq 3d) pouvant contenir jusqu'à 18 électrons."
            }
          ],
          collegeExamTip:
            "Une question d'examen classique au cégep consiste à repérer un ensemble invalide de nombres quantiques. Vérifiez systématiquement que l est strictement inférieur à n et que ml se situe bien dans l'intervalle [-l, +l]. Par exemple, le jeu (n=2, l=2, ml=0, ms=+1/2) est formellement interdit car l ne peut pas être égal à n.",
          commonMistakes:
            "Oublier que les orbitales d'une même sous-couche (par exemple les trois orbitales 2p) sont dégénérées (ont exactement la même énergie) dans un atome isolé sans champ magnétique externe."
        },
        {
          id: 'sec-1-3',
          title: "Configuration électronique et règles de remplissage",
          pageNumber: 5,
          learningObjectives: [
            "Appliquer le principe d'Aufbau, le principe d'exclusion de Pauli et la règle de Hund pour établir la configuration électronique à l'état fondamental.",
            "Identifier les exceptions notables de configuration du bloc d (chrome et cuivre).",
            "Écrire les configurations électroniques des cations et des anions, et distinguer électrons de cœur et de valence."
          ],
          bodyMarkdown: [
            "L'agencement des électrons dans les diverses sous-couches atomiques à l'état fondamental (l'état d'énergie minimale) obéit à trois règles fondamentales :",
            "• Le principe d'Aufbau (ou règle de Klechkowski) : les électrons remplissent les orbitales par ordre croissant d'énergie. L'ordre suit la somme (n + l) : 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d...",
            "• Le principe d'exclusion de Pauli : deux électrons d'un même atome ne peuvent avoir leurs quatre nombres quantiques identiques. Par conséquent, une orbitale donnée ne peut héberger au maximum que deux électrons, et ceux-ci doivent posséder des spins opposés (+1/2 et -1/2).",
            "• La règle de Hund : pour des orbitales dégénérées (de même énergie, comme les trois orbitales 2p), les électrons occupent le plus grand nombre d'orbitales possibles avec des spins parallèles avant de s'apparier, ce qui minimise les répulsions interélectroniques.",
            "Exceptions de stabilité du bloc d : Le chrome (Z = 24) adopte la configuration [Ar] 3d⁵ 4s¹ au lieu de [Ar] 3d⁴ 4s², car une sous-couche d demi-remplie (3d⁵) confère une stabilité quantique accrue par minimisation d'échange et de répulsion. De même, le cuivre (Z = 29) adopte [Ar] 3d¹⁰ 4s¹ plutôt que [Ar] 3d⁹ 4s² afin de saturer complètement la sous-couche 3d.",
            "Ionisation des métaux de transition : Lors de la formation de cations pour les éléments du bloc d (comme le fer Fe : [Ar] 3d⁶ 4s²), les électrons de la couche la plus externe (4s) sont retirés EN PREMIER. Ainsi, l'ion Fe²⁺ possède la configuration [Ar] 3d⁶ et non [Ar] 3d⁴ 4s²."
          ],
          keyFormulas: [
            {
              formula: "Cr (Z = 24) : [Ar] 3d⁵ 4s¹  |  Cu (Z = 29) : [Ar] 3d¹⁰ 4s¹",
              explanation: "Configurations d'exceptions collégiales à mémoriser impérativement."
            },
            {
              formula: "Fe : [Ar] 3d⁶ 4s²  →  Fe²⁺ : [Ar] 3d⁶  →  Fe³⁺ : [Ar] 3d⁵",
              explanation: "Règle de perte préférentielle des électrons ns avant les électrons (n-1)d lors de l'ionisation."
            }
          ],
          collegeExamTip:
            "Ne faites jamais l'erreur de retirer des électrons 3d avant les 4s pour un cation de transition ! Dès que la sous-couche 3d commence à se remplir, l'orbitale 4s passe à un niveau d'énergie effectif légèrement plus élevé que 3d en raison des interactions électrostatiques.",
          commonMistakes:
            "Écrire la configuration de l'ion sulfure S²⁻ en oubliant l'ajout de 2 électrons de valence : S (Z=16) est [Ne] 3s² 3p⁴, donc S²⁻ devient [Ne] 3s² 3p⁶, isoélectronique à l'argon."
        }
      ],
      exercises: [
        {
          id: 'ex-1-1',
          number: 1,
          title: "Transition spectrale de l'atome d'hydrogène",
          statement:
            "Un électron de l'atome d'hydrogène subit une désexcitation en passant du niveau n = 4 au niveau n = 2.\na) Calculez l'énergie (en joules) du photon émis.\nb) Déterminez la longueur d'onde (en nanomètres) de cette radiation.\nc) Indiquez à quelle série spectrale et à quel domaine électromagnétique appartient cette raie.",
          hints: [
            "Utilisez la formule de Rydberg ou la formule d'énergie de Bohr : E_n = -2,178 × 10⁻¹⁸ J / n².",
            "Rappelez-vous que la vitesse de la lumière c = 2,998 × 10⁸ m/s et h = 6,626 × 10⁻³⁴ J·s."
          ],
          solutionSteps: [
            "Calcul de l'énergie des niveaux : E₄ = -2,178 × 10⁻¹⁸ / 4² = -1,361 × 10⁻¹⁹ J. E₂ = -2,178 × 10⁻¹⁸ / 2² = -5,445 × 10⁻¹⁹ J.",
            "Calcul de la variation d'énergie du photon : E_photon = |E₂ - E₄| = |-5,445 × 10⁻¹⁹ - (-1,361 × 10⁻¹⁹)| = 4,084 × 10⁻¹⁹ J.",
            "Calcul de la longueur d'onde : λ = (h · c) / E_photon = (6,626 × 10⁻³⁴ J·s × 2,998 × 10⁸ m/s) / (4,084 × 10⁻¹⁹ J) = 4,864 × 10⁻⁷ m = 486,4 nm.",
            "Identification : La transition aboutissant au niveau n = 2 appartient à la série de Balmer, située dans le domaine de la lumière visible (couleur cyan/bleu-vert)."
          ],
          finalAnswer: "E_photon = 4,08 × 10⁻¹⁹ J ; λ = 486,4 nm (raie cyan de la série de Balmer, visible).",
          difficulty: 'fondamental',
          tags: ['Bohr', 'Spectroscopie', 'Balmer', 'Photon']
        },
        {
          id: 'ex-1-2',
          number: 2,
          title: "Nombres quantiques et diagrammes de cases quantiques",
          statement:
            "Pour l'atome de fer (Z = 26) à l'état fondamental :\na) Écrivez sa configuration électronique complète et abrégée avec le cœur de gaz rare.\nb) Précisez les quatre nombres quantiques (n, l, ml, ms) pour l'un des électrons de valence occupant l'orbitale 4s.\nc) Dessinez mentalement le diagramme de cases quantiques pour la sous-couche 3d et indiquez le nombre d'électrons célibataires. L'atome de fer est-il paramagnétique ou diamagnétique ?",
          hints: [
            "Le fer est un métal de transition de la période 4, après l'argon.",
            "Appliquez la règle de Hund pour répartir les 6 électrons parmi les 5 orbitales 3d."
          ],
          solutionSteps: [
            "Configuration complète : 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. Configuration avec gaz rare : [Ar] 3d⁶ 4s².",
            "Nombres quantiques pour un électron 4s : n = 4, l = 0 (orbitale s), ml = 0 (car ml varie de -l à +l), ms = +1/2 (ou -1/2 pour le second électron apparié).",
            "Diagramme des 5 cases 3d : On dispose de 6 électrons pour 5 orbitales. Selon Hund, on place un électron par case de même spin (5 électrons célibataires), puis le 6e électron s'apparie dans la première case avec un spin opposé. Il reste donc 4 orbitales contenant chacune un électron célibataire.",
            "Propriété magnétique : Possédant 4 électrons célibataires (non appariés), l'atome de fer neutre est fortement paramagnétique (attiré par un champ magnétique externe)."
          ],
          finalAnswer: "[Ar] 3d⁶ 4s² ; (n=4, l=0, ml=0, ms=±1/2) ; 4 électrons célibataires, substance paramagnétique.",
          difficulty: 'intermédiaire',
          tags: ['Aufbau', 'Hund', 'Nombres quantiques', 'Paramagnétisme']
        }
      ]
    },
    {
      id: 'chapitre-2',
      moduleId: 'module-1',
      chapterNumber: 2,
      title: "Le tableau périodique et les tendances périodiques",
      summary:
        "Ce chapitre explore l'architecture du tableau périodique des éléments, introduit le concept central de charge nucléaire effective (Zeff) et analyse les grandes tendances périodiques : rayon atomique, rayon ionique, énergies d'ionisation successives, affinité électronique et électronégativité.",
      startPage: 9,
      endPage: 16,
      sections: [
        {
          id: 'sec-2-1',
          title: "Architecture du tableau périodique et charge nucléaire effective",
          pageNumber: 9,
          learningObjectives: [
            "Distinguer les groupes (familles) et les périodes dans le tableau périodique moderne.",
            "Calculer de façon semi-empirique la charge nucléaire effective Zeff ressentie par les électrons de valence.",
            "Expliquer l'effet d'écran exercé par les électrons de cœur sur les électrons périphériques."
          ],
          bodyMarkdown: [
            "Le tableau périodique actuel classe les 118 éléments par numéro atomique (Z) croissant, structuré en 7 périodes horizontales (correspondant au nombre quantique principal n le plus élevé) et 18 colonnes verticales appelées groupes ou familles chimiques.",
            "Les éléments d'une même famille possèdent la même configuration électronique de valence, ce qui leur confère des propriétés chimiques et des réactivités analogues. On distingue :",
            "• Le groupe 1 : les métaux alcalins (ns¹, très réducteurs, réagissent violemment avec l'eau).",
            "• Le groupe 2 : les métaux alcalino-terreux (ns², réducteurs vigoureux).",
            "• Les groupes 3 à 12 : les métaux de transition (remplissage progressif de la sous-couche d).",
            "• Le groupe 16 : les chalcogènes (ns² np⁴).",
            "• Le groupe 17 : les halogènes (ns² np⁵, très électronégatifs, forment des sels avec les métaux).",
            "• Le groupe 18 : les gaz nobles (ns² np⁶, octet complet, grande inertie chimique).",
            "La notion maîtresse pour expliquer rationnellement toutes les tendances périodiques est la charge nucléaire effective (Zeff). Un électron de valence ne ressent pas l'intégralité de la charge positive des Z protons du noyau, car les électrons des couches internes (électrons de cœur) s'interposent et exercent une répulsion électrostatique, réduisant l'attraction nette du noyau. Selon le modèle simplifié de Slater : Zeff = Z - S, où S représente la constante d'écran.",
            "À travers une même période (de gauche à droite), le numéro atomique Z augmente de 1 unité à chaque élément, alors que les électrons s'ajoutent dans la même couche de valence. Les électrons de valence se font mutuellement un écran très médiocre. Par conséquent, Zeff augmente de façon marquée de gauche à droite across la période."
          ],
          keyFormulas: [
            {
              formula: "Z_eff = Z - S",
              explanation: "Charge nucléaire effective ressentie par un électron, où Z est la charge nucléaire réelle et S la constante d'écran."
            }
          ],
          collegeExamTip:
            "Pour justifier toute variation de propriété au cégep (rayon, ionisation, électronégativité), invoquez toujours deux arguments explicites : 1) Si vous comparez le long d'une période, basez votre explication sur l'augmentation de Zeff. 2) Si vous comparez le long d'un groupe, basez votre explication sur l'augmentation du nombre quantique principal n (nombre de couches électroniques), qui éloigne les électrons du noyau.",
          commonMistakes:
            "Prétendre que Zeff augmente lorsqu'on descend dans une colonne. En réalité, en descendant dans un groupe, Zeff ressenti par les électrons externes reste approximativement constant, mais le nombre de couches n augmente."
        },
        {
          id: 'sec-2-2',
          title: "Rayon atomique, rayon ionique et isoélectronique",
          pageNumber: 11,
          learningObjectives: [
            "Prédire et justifier les variations du rayon atomique dans le tableau périodique.",
            "Comparer la taille d'un atome neutre à celle de son cation et de son anion.",
            "Classer des espèces appartenant à une série isoélectronique par ordre de taille."
          ],
          bodyMarkdown: [
            "Le rayon atomique est défini opérationnellement comme la moitié de la distance séparant les noyaux de deux atomes identiques liés chimiquement.",
            "Tendances périodiques du rayon atomique :",
            "1. Le long d'une période (de gauche à droite) : le rayon atomique DIMINUE. Bien que le nombre de protons et d'électrons s'accroisse, la hausse de la charge nucléaire effective (Zeff) attire plus vigoureusement le nuage électronique vers le noyau, entraînant une contraction de l'atome.",
            "2. Le long d'un groupe (de haut en bas) : le rayon atomique AUGMENTE. Chaque nouvelle période correspond à l'ouverture d'une nouvelle couche quantique (n augmente). Les électrons de valence occupent des orbitales de plus en plus éloignées du noyau, surpassant l'effet de l'accroissement de la charge nucléaire.",
            "Rayon ionique :",
            "• La formation d'un cation (perte d'électrons) s'accompagne d'une réduction drastique de taille : r(cation) < r(atome neutre). La perte d'électrons diminue les répulsions interélectroniques et, fréquemment, vide entièrement la couche de valence externe (par ex. Na : 186 pm ; Na⁺ : 102 pm).",
            "• La formation d'un anion (gain d'électrons) s'accompagne d'une augmentation de taille : r(anion) > r(atome neutre). L'ajout d'électrons dans la même couche accroît la répulsion mutuelle, provoquant l'expansion spatiale du nuage électronique (par ex. Cl : 99 pm ; Cl⁻ : 181 pm).",
            "Séries isoélectroniques : Des espèces possédant exactement le même nombre d'électrons et la même configuration électronique forment une série isoélectronique (par exemple : N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺, Al³⁺, qui ont tous 10 électrons). Dans une série isoélectronique, la taille diminue de façon continue à mesure que le nombre de protons (Z) augmente, car le noyau exerce une attraction d'autant plus forte sur le même nombre d'électrons."
          ],
          keyFormulas: [
            {
              formula: "Série isoélectronique (10 e⁻) : r(N³⁻) > r(O²⁻) > r(F⁻) > r(Na⁺) > r(Mg²⁺) > r(Al³⁺)",
              explanation: "Ordre décroissant des rayons dicté par la valeur croissante du numéro atomique Z (de Z=7 à Z=13)."
            }
          ],
          collegeExamTip:
            "Lorsqu'on vous demande de comparer les rayons dans une série isoélectronique, donnez explicitement le nombre d'électrons (identique pour tous) et le nombre de protons de chacun pour démontrer votre raisonnement rigoureux.",
          commonMistakes:
            "Penser qu'un cation est plus grand parce qu'il provient d'un métal qui est situé à gauche du tableau périodique."
        },
        {
          id: 'sec-2-3',
          title: "Énergie d'ionisation, affinité électronique et électronégativité",
          pageNumber: 13,
          learningObjectives: [
            "Définir la première énergie d'ionisation (EI₁) et analyser les ruptures de tendance le long d'une période.",
            "Expliquer le saut quantique spectaculaire observé lors de l'arrachement d'électrons de cœur successifs.",
            "Définir l'électronégativité selon l'échelle de Pauling et prédire le caractère de la liaison chimique."
          ],
          bodyMarkdown: [
            "L'énergie de première ionisation (EI₁) est l'énergie minimale requise pour arracher un électron à un atome gazeux isolé dans son état fondamental : X(g) + EI₁ → X⁺(g) + e⁻. Ce processus est strictement endothermique (EI > 0).",
            "Tendance générale de EI₁ : Elle augmente de gauche à droite le long d'une période (car Zeff augmente et le rayon diminue, retenant plus fortement les électrons) et elle diminue de haut en bas le long d'un groupe (car n augmente et l'électron est plus éloigné du noyau).",
            "Anomalies remarquables le long de la période 2 :",
            "• Entre le béryllium (Be : [He] 2s²) et le bore (B : [He] 2s² 2p¹) : l'énergie d'ionisation du bore est légèrement inférieure à celle du béryllium. Raison : l'électron 2p du bore est situé dans une sous-couche d'énergie plus haute et subit l'écran des électrons 2s.",
            "• Entre l'azote (N : [He] 2s² 2p³) et l'oxygène (O : [He] 2s² 2p⁴) : l'énergie d'ionisation de l'oxygène est inférieure à celle de l'azote. Raison : l'azote possède une sous-couche 2p à moitié remplie avec 3 électrons célibataires de spins parallèles. Chez l'oxygène, le quatrième électron doit s'apparier dans une orbitale déjà occupée, générant une répulsion interélectronique accrue facilitant son éjection.",
            "Énergies d'ionisation successives : EI₁ < EI₂ < EI₃ << EI₄. On observe un saut énergétique monumental lorsque l'on commence à arracher des électrons appartenant à une couche de cœur interne (par exemple, pour le magnésium Mg ([Ne] 3s²), EI₁ = 738 kJ/mol, EI₂ = 1451 kJ/mol, puis EI₃ = 7733 kJ/mol ! Le saut vertigineux entre EI₂ et EI₃ confirme que le magnésium possède exactement 2 électrons de valence).",
            "L'électronégativité (ÉN) selon Linus Pauling mesure la capacité relative d'un atome, engagé dans une liaison covalente, à attirer vers lui les électrons de la liaison. L'élément le plus électronégatif est le fluor (ÉN = 3,98 ~ 4,0), suivi de l'oxygène (3,44) et de l'azote (3,04). L'électronégativité augmente vers le haut et vers la droite du tableau périodique (les gaz nobles n'ayant généralement pas d'électronégativité définie dans l'échelle classique de Pauling)."
          ],
          keyFormulas: [
            {
              formula: "X(g) + EI₁ → X⁺(g) + e⁻  (EI₁ > 0)",
              explanation: "Première ionisation en phase gazeuse."
            },
            {
              formula: "X⁺(g) + EI₂ → X²⁺(g) + e⁻  (EI₂ > EI₁)",
              explanation: "Deuxième ionisation, toujours supérieure car l'électron est arraché à une entité déjà chargée positivement."
            }
          ],
          collegeExamTip:
            "Pour déterminer la famille d'un élément inconnu à partir d'un tableau d'énergies d'ionisation successives, repérez l'endroit où se produit le saut énergétique gigantesque (facteur 4 à 6). Le nombre d'énergies avant le saut équivaut directement au nombre d'électrons de valence !",
          commonMistakes:
            "Confondre énergie d'ionisation (qui concerne un atome gazeux isolé perdant un électron) et électronégativité (qui concerne la traction sur des électrons engagés dans une liaison chimique)."
        }
      ],
      exercises: [
        {
          id: 'ex-2-1',
          number: 3,
          title: "Analyse d'énergies d'ionisation successives",
          statement:
            "Un élément mystère X de la période 3 présente les cinq premières énergies d'ionisation suivantes (en kJ/mol) :\nEI₁ = 578 ; EI₂ = 1817 ; EI₃ = 2745 ; EI₄ = 11577 ; EI₅ = 14842.\na) Déterminez le nombre d'électrons de valence de cet élément et identifiez son symbole chimique.\nb) Écrivez l'équation chimique correspondant à la mesure de EI₃.\nc) Pourquoi EI₄ est-elle considérablement plus élevée que EI₃ ?",
          hints: [
            "Cherchez le bond quantique disproportionné entre deux valeurs successives.",
            "L'élément est situé sur la période 3 (couche n = 3)."
          ],
          solutionSteps: [
            "Observation des rapports : EI₂/EI₁ ≈ 3,1 ; EI₃/EI₂ ≈ 1,5 ; EI₄/EI₃ = 11577 / 2745 ≈ 4,22 (saut colossal).",
            "Conclusion sur la valence : Le saut survient après l'arrachement du 3e électron. L'élément possède donc 3 électrons de valence. Situé sur la période 3 avec 3 électrons de valence (groupe 13), l'élément est l'aluminium (Al, Z = 13).",
            "Équation pour EI₃ : Al²⁺(g) → Al³⁺(g) + e⁻.",
            "Explication de l'élévation de EI₄ : Les trois premiers électrons proviennent de la couche de valence externe (3s² 3p¹). Le quatrième électron doit être extrait de la couche de cœur 2p⁶ de configuration de gaz rare [Ne], beaucoup plus proche du noyau (n = 2 au lieu de n = 3) et ne bénéficiant plus de l'écran des électrons n = 3."
          ],
          finalAnswer: "3 électrons de valence ; l'élément est l'aluminium (Al) ; saut dû au passage à la couche de cœur [Ne].",
          difficulty: 'intermédiaire',
          tags: ['Énergie d\'ionisation', 'Aluminium', 'Période 3', 'Électrons de cœur']
        },
        {
          id: 'ex-2-2',
          number: 4,
          title: "Comparaison de rayons atomiques et ioniques",
          statement:
            "Soit les espèces chimiques suivantes : K, K⁺, Ca²⁺, Cl, Cl⁻, S²⁻.\na) Classez les espèces neutres K et Cl par ordre croissant de rayon atomique et justifiez.\nb) Classez les ions K⁺, Ca²⁺, Cl⁻ et S²⁻ par ordre croissant de rayon ionique en détaillant votre argumentaire basé sur la charge nucléaire effective.",
          hints: [
            "Pour les neutres, vérifiez la période et le groupe.",
            "Pour les ions, calculez le nombre total d'électrons de chaque espèce afin de détecter une série isoélectronique."
          ],
          solutionSteps: [
            "Espèces neutres : Le chlore Cl est sur la période 3 (n = 3, Z = 17) tandis que le potassium K est sur la période 4 (n = 4, Z = 19). Le potassium possède une couche électronique supplémentaire occupée (orbitale 4s), ce qui étend considérablement son nuage électronique. Ainsi : r(Cl) < r(K) (Cl ≈ 99 pm, K ≈ 227 pm).",
            "Espèces ioniques : Calculons le nombre d'électrons de chaque ion :\n  - Ca²⁺ (Z=20) : 20 - 2 = 18 e⁻\n  - K⁺ (Z=19) : 19 - 1 = 18 e⁻\n  - Cl⁻ (Z=17) : 17 + 1 = 18 e⁻\n  - S²⁻ (Z=16) : 16 + 2 = 18 e⁻\nCes quatre ions forment une série isoélectronique ayant tous 18 électrons (configuration de l'argon).",
            "Influence de la charge nucléaire Z : Les 18 électrons subissent l'attraction d'un nombre croissant de protons. Plus Z est élevé, plus les électrons sont attirés vers le centre, et plus le rayon se contracte.",
            "Ordre croissant final : r(Ca²⁺) < r(K⁺) < r(Cl⁻) < r(S²⁻) (Ca²⁺ : 100 pm ; K⁺ : 138 pm ; Cl⁻ : 181 pm ; S²⁻ : 184 pm)."
          ],
          finalAnswer: "Neutres : r(Cl) < r(K) ; Ions : r(Ca²⁺) < r(K⁺) < r(Cl⁻) < r(S²⁻).",
          difficulty: 'intermédiaire',
          tags: ['Rayon ionique', 'Isoélectronique', 'Potassium', 'Calcium']
        }
      ]
    }
  ]
};
