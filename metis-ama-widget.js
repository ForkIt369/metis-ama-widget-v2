/**
 * Metis AMA Widget - An embeddable widget for displaying AMA questions and category analysis
 * Inspired by w3dv.com/alpha/metis
 */

const MetisAMAWidget = (function() {
    // Category analysis data
    const categoryAnalysis = [
        { 
            id: "technical", 
            name: "Technical Differentiation & Value Proposition", 
            percentage: 25,
            description: "What makes Hyperion different from other L2s?",
            focus: "architecture, value proposition, unique features",
            themes: [
                { 
                    name: "Hyperion vs. Andromeda differences",
                    questions: ["How will Hyperion/Andromeda and Metis be combined?"]
                },
                { 
                    name: "L2 technical advantages",
                    questions: ["With Metis running both Andromeda and Hyperion for high-speed dApp action, how's that combo tackling the scalability, security, and speed?"]
                },
                { 
                    name: "AI integration uniqueness",
                    questions: ["В чем уникальность ИИ на Метисе, в сравнении с конкурентами?"],
                    translations: ["What is the uniqueness of AI on Metis compared to competitors?"]
                }
            ]
        },
        { 
            id: "roadmap", 
            name: "Roadmap & Timeline", 
            percentage: 20,
            description: "When will features launch and what's coming next?",
            focus: "development timeline, milestones, future plans",
            themes: [
                { 
                    name: "Launch schedule",
                    questions: ["When Hyperion decentralized?"]
                },
                { 
                    name: "Development priorities",
                    questions: ["You have 2 years roadmap for creating Hyperion. Do you think 2 years is not so long period of time for current market demand?"]
                }
            ]
        },
        { 
            id: "security", 
            name: "Security & Decentralization", 
            percentage: 15,
            description: "How does the platform ensure security and decentralization?",
            focus: "security measures, decentralization strategy, trustlessness",
            themes: [
                { 
                    name: "Security architecture",
                    questions: ["Should people watch out for anything when using or building on these chains?"]
                }
            ]
        },
        { 
            id: "cross-chain", 
            name: "Cross-Chain & Interoperability", 
            percentage: 12,
            description: "How does Hyperion connect with other blockchains?",
            focus: "bridges, cross-chain communication, asset transfers",
            themes: [
                { 
                    name: "Bridge technology",
                    questions: ["How will it integrate with Andromeda in terms of interoperability and scalability?"]
                }
            ]
        },
        { 
            id: "ai", 
            name: "AI Integration & Capabilities", 
            percentage: 10,
            description: "How is AI technology integrated into the platform?",
            focus: "AI integration, machine learning, AI-powered features",
            themes: [
                { 
                    name: "AI functionality",
                    questions: ["What are the most useful features of Alith? Does it only benefit one thing?"]
                },
                { 
                    name: "AI efficiency",
                    questions: ["Yapay zeka ve verimi uyumunu nasıl çözecek?"],
                    translations: ["How will it solve the harmony of artificial intelligence and efficiency?"]
                }
            ]
        },
        { 
            id: "performance", 
            name: "Performance & Scalability", 
            percentage: 10,
            description: "How will the platform handle increasing load?",
            focus: "TPS, gas fees, network congestion, scalability solution",
            themes: [
                { 
                    name: "Transaction throughput",
                    questions: ["Porque a Metis le cuesta mantenerse por encima de los 1/TPS?"],
                    translations: ["Why does Metis struggle to maintain above 1/TPS?"]
                },
                { 
                    name: "Scalability approach",
                    questions: ["How does Hyperion surpass order limit on the chain?"]
                }
            ]
        },
        { 
            id: "ecosystem", 
            name: "Ecosystem Growth & Partnerships", 
            percentage: 8,
            description: "How is the ecosystem expanding and evolving?",
            focus: "partnerships, integrations, community growth",
            themes: [
                { 
                    name: "Platform growth",
                    questions: ["Wann wächst die Metis Plattform wieder mit seriösen Projekten?"],
                    translations: ["When will the Metis platform grow again with serious projects?"]
                }
            ]
        }
    ];
    // Data structure for the AMA questions
    const amaData = {
        categories: [
            {
                id: "technical",
                name: "Technical Architecture",
                count: 12,
                questions: [
                    {
                        text: "With Metis running both Andromeda and Hyperion for high-speed dApp action, how's that combo tackling the scalability, security, and speed? Should people watch out for anything when using or building on these chains?",
                        language: "en"
                    },
                    {
                        text: "How will Hyperion/Andromeda and Metis be combined?",
                        language: "en"
                    },
                    {
                        text: "How does Hyperion surpass order limit on the chain?",
                        language: "en"
                    },
                    {
                        text: "What makes Hyperion different? Or is it just a cool name?",
                        language: "en"
                    },
                    {
                        text: "How will Hyperion impact UX of normal non-institutionalized users?",
                        language: "en"
                    },
                    {
                        text: "What is the ratio of Hype/Metis? Is it one-to-one?",
                        language: "en"
                    },
                    {
                        text: "How does the introduction of Hyperion enhance the capabilities of the Metis ecosystem compared to Andromeda, and what specific use cases are expected to benefit most from Hyperion's high-performance features?",
                        language: "en"
                    },
                    {
                        text: "With Hyperion and Andromeda shaping the next phase of Metis, how do you see these innovations tackling Ethereum's biggest scalability challenges differently than other L2s? What's the long-term vision beyond just lowering fees?",
                        language: "en"
                    },
                    {
                        text: "Why Andromeda?",
                        language: "en"
                    },
                    {
                        text: "Why Hyperion?",
                        language: "en"
                    },
                    {
                        text: "Con la introducción de Hyperion y su enfoque en AI-native rollups, ¿cómo se integrará con Andrómeda en términos de interoperabilidad y escalabilidad? ¿Veremos puentes nativos entre ambas redes para mejorar la experiencia del usuario y la liquidez?",
                        language: "es",
                        translation: "With the introduction of Hyperion and its focus on AI-native rollups, how will it integrate with Andromeda in terms of interoperability and scalability? Will we see native bridges between both networks to improve user experience and liquidity?"
                    },
                    {
                        text: "В чем уникальность ИИ на Метисе, в сравнении с конкурентами?",
                        language: "ru",
                        translation: "What is the uniqueness of AI on Metis compared to competitors?"
                    }
                ]
            },
            {
                id: "testnet",
                name: "Testnet & Development",
                count: 9,
                questions: [
                    {
                        text: "Is the testnet open for the community to participate?",
                        language: "en"
                    },
                    {
                        text: "Is the Hyperion testnet going to be rewarding or not? Can we participate in the testnet and would there be rewards at the launch of the Hyperion Mainnet?",
                        language: "en"
                    },
                    {
                        text: "Will Hyperion has its own token in future?",
                        language: "en"
                    },
                    {
                        text: "When Hyperion decentralized?",
                        language: "en"
                    },
                    {
                        text: "Hyperion测试网会持续多久?达成目标是什么?",
                        language: "zh",
                        translation: "How long will the Hyperion testnet last? What is the goal to achieve?"
                    },
                    {
                        text: "You have 2 years roadmap for creating Hyperion. Do you think 2 years is not so long period of time for current market demand?",
                        language: "en"
                    },
                    {
                        text: "How can I contribute more to this ecosystem?",
                        language: "en"
                    },
                    {
                        text: "Can Hyperion be leveraged by other Blockchains or developers to enjoy Hyperion AI integration benefits?",
                        language: "en"
                    },
                    {
                        text: "How can I help Metis?",
                        language: "en"
                    }
                ]
            },
            {
                id: "ai",
                name: "AI Integration & Features",
                count: 8,
                questions: [
                    {
                        text: "Given the rapid advancements in AI and technology, how do you see the interaction between Hyperion and Andromeda evolving in the future? Will they play a key role in bridging the gap between various galaxies or factions?",
                        language: "en"
                    },
                    {
                        text: "AI blokchain uyarlaması nasıl olacak?",
                        language: "tr",
                        translation: "How will the AI blockchain adaptation be?"
                    },
                    {
                        text: "The value and function of cryptocurrencies are based on human interaction, technological infrastructure and economic factors. How does this function in Hyperion?",
                        language: "en"
                    },
                    {
                        text: "What are the most useful features of Alith? Does it only benefit one thing?",
                        language: "en"
                    },
                    {
                        text: "Why do you corrupt Alith?",
                        language: "en"
                    },
                    {
                        text: "Can we have an ELI5 about Hyperion, and about this corrupt Alith please?",
                        language: "en"
                    },
                    {
                        text: "Yapay zeka ve verimi uyumunu nasıl çözecek?",
                        language: "tr",
                        translation: "How will it solve the harmony of artificial intelligence and efficiency?"
                    },
                    {
                        text: "Süreç tamamen yapay zekaya teslim bir şekilde mi işliyor?",
                        language: "tr",
                        translation: "Is the process completely running in a way that's surrendered to artificial intelligence?"
                    }
                ]
            },
            {
                id: "future",
                name: "Future & Strategy",
                count: 16,
                questions: [
                    {
                        text: "What is your long term strategy?",
                        language: "en"
                    },
                    {
                        text: "How do you see future about it?",
                        language: "en"
                    },
                    {
                        text: "Will the new Hyperion cancel out or take attention away from the Andromeda?",
                        language: "en"
                    },
                    {
                        text: "Hyperion geleceğinde ön planda hangi unsurlar olacak?",
                        language: "tr",
                        translation: "What elements will be at the forefront in Hyperion's future?"
                    },
                    {
                        text: "Andromeda geleceğinde ön planda hangi unsurlar olacak?",
                        language: "tr",
                        translation: "What elements will be at the forefront in Andromeda's future?"
                    },
                    {
                        text: "2025 sonunda kendinizi nerede görüyorsunuz?",
                        language: "tr",
                        translation: "Where do you see yourself at the end of 2025?"
                    },
                    {
                        text: "How long will investors see the contributions of the Hyperion artificial intelligence tool in the $METIS ecosystem and do you believe that 100% efficiency will be achieved?",
                        language: "en"
                    },
                    {
                        text: "How will Hyperion impact the red market?",
                        language: "en"
                    },
                    {
                        text: "Metis always seems to be one or two steps behind the current trend. We missed the meme boat, now playing catch up on AI. When will we lead instead of follow?",
                        language: "en"
                    },
                    {
                        text: "How do you evaluate the state of the crypto market? Where do you see yourself in this market? What action do you intend to take if you encounter an adverse situation?",
                        language: "en"
                    },
                    {
                        text: "Where do you see Metis in the mid-term?",
                        language: "en"
                    },
                    {
                        text: "Do you have any special advertising methods that you use to attract people to Hyperion that are different from others?",
                        language: "en"
                    },
                    {
                        text: "Is your marketers plan to influence the price of Metis?",
                        language: "en"
                    },
                    {
                        text: "Hyperion roadmap and investors?",
                        language: "en"
                    },
                    {
                        text: "Metisin geleceği hakkında ne gibi projeler hazırlıyorsunuz?",
                        language: "tr",
                        translation: "What kind of projects are you preparing for Metis's future?"
                    },
                    {
                        text: "How will Hyperion/Andromeda fit into Metis' long-term vision? Are there any upcoming innovations or partnerships that will expand its impact?",
                        language: "en"
                    }
                ]
            },
            {
                id: "token",
                name: "Token & Rewards",
                count: 16,
                questions: [
                    {
                        text: "When airdrop?",
                        language: "en"
                    },
                    {
                        text: "When airdrop for task?",
                        language: "en"
                    },
                    {
                        text: "When is drop?",
                        language: "en"
                    },
                    {
                        text: "Wen drop?",
                        language: "en"
                    },
                    {
                        text: "Ödüller artacak?",
                        language: "tr",
                        translation: "Will rewards increase?"
                    },
                    {
                        text: "Ödülümüzü ne zaman alacağız?",
                        language: "tr",
                        translation: "When will we receive our rewards?"
                    },
                    {
                        text: "W3DV yeni görevler ne zaman gelecek?",
                        language: "tr",
                        translation: "When will W3DV new tasks come?"
                    },
                    {
                        text: "Halen metisler gönderilmedi proje yavaş işliyor dağıtım ne zaman?",
                        language: "tr",
                        translation: "Metis tokens have still not been sent, the project is running slowly, when is the distribution?"
                    },
                    {
                        text: "Hakettiğimizi ne zaman alıcağız?",
                        language: "tr",
                        translation: "When will we receive what we deserve?"
                    },
                    {
                        text: "Dağıtım ne zaman?",
                        language: "tr",
                        translation: "When is the distribution?"
                    },
                    {
                        text: "When the Alpha Mind airdrop?",
                        language: "en"
                    },
                    {
                        text: "Ne zaman drop olucak?",
                        language: "tr",
                        translation: "When will the drop happen?"
                    },
                    {
                        text: "Dağıtım ne saman?",
                        language: "tr",
                        translation: "When is the distribution?"
                    },
                    {
                        text: "When TGE?",
                        language: "en"
                    },
                    {
                        text: "Bizlere ne gibi bir faydan olacak?",
                        language: "tr",
                        translation: "What kind of benefit will you have for us?"
                    },
                    {
                        text: "How will the coin distribution be done?",
                        language: "en"
                    }
                ]
            },
            {
                id: "community",
                name: "Community & Ecosystem",
                count: 4,
                questions: [
                    {
                        text: "Metis geleceğinde launchpad sistemi getirmeyi düşünüyo mu?",
                        language: "tr",
                        translation: "Is Metis thinking of bringing a launchpad system in the future?"
                    },
                    {
                        text: "Dusa il ilgili projeleri var mı?",
                        language: "tr",
                        translation: "Are there any projects related to Dusa?"
                    },
                    {
                        text: "Wann wächst die Metis Plattform wieder mit seriösen Projekten?",
                        language: "de",
                        translation: "When will the Metis platform grow again with serious projects?"
                    },
                    {
                        text: "What will be the stage (0 / 1 / 2) of L2 Metis?",
                        language: "en"
                    }
                ]
            },
            {
                id: "naming",
                name: "Naming & Identity",
                count: 4,
                questions: [
                    {
                        text: "Bu ismi nasıl buldunuz?",
                        language: "tr",
                        translation: "How did you come up with this name?"
                    },
                    {
                        text: "Hyperion nedir?",
                        language: "tr",
                        translation: "What is Hyperion?"
                    },
                    {
                        text: "Andromeda nedir?",
                        language: "tr",
                        translation: "What is Andromeda?"
                    },
                    {
                        text: "Hyperion ne işe yarıyo?",
                        language: "tr",
                        translation: "What is Hyperion useful for?"
                    }
                ]
            },
            {
                id: "misc",
                name: "Miscellaneous Questions",
                count: 10,
                questions: [
                    {
                        text: "Hyperion neden Metis'te?",
                        language: "tr",
                        translation: "Why is Hyperion on Metis?"
                    },
                    {
                        text: "Hyperion/Andromeda amacı nedir?",
                        language: "tr",
                        translation: "What is the purpose of Hyperion/Andromeda?"
                    },
                    {
                        text: "Effiecency?",
                        language: "en"
                    },
                    {
                        text: "When ama?",
                        language: "en"
                    },
                    {
                        text: "Bip bipleri nedir?",
                        language: "tr",
                        translation: "What are the bip bips?"
                    },
                    {
                        text: "Hyperion geleceği nasıl olacak?",
                        language: "tr",
                        translation: "How will Hyperion's future be?"
                    },
                    {
                        text: "Bize de dook verecek misiniz?",
                        language: "tr",
                        translation: "Will you give us dook too?"
                    },
                    {
                        text: "Hyperion ne zaman faaliyete geçecek?",
                        language: "tr",
                        translation: "When will Hyperion become operational?"
                    },
                    {
                        text: "Porque a Metis le cuesta mantenerse por encima de los 1/TPS? Quiero decir, hay otra L2 que llevan menos tiempo de lanzamiento y sin una base de cliente previa pudieron posicionarse rapidamente",
                        language: "es",
                        translation: "Why does Metis struggle to maintain above 1/TPS? I mean, there are other L2s that have been launched more recently and without a previous client base that were able to position themselves quickly"
                    },
                    {
                        text: "¿En que diferencia Andrómeda de otras redes?¡qué la hace mejor?",
                        language: "es",
                        translation: "How is Andromeda different from other networks? What makes it better?"
                    }
                ]
            }
        ]
    };

    // Language display names
    const languages = {
        en: "English",
        es: "Spanish",
        tr: "Turkish",
        de: "German",
        ru: "Russian",
        zh: "Chinese",
        ko: "Korean",
        pt: "Portuguese"
    };
    
    // Available UI languages with flag emojis
    const uiLanguages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ];
    
    // UI translations
    const translations = {
        en: {
            title: "Beep-boop AMA Transmissions",
            questions: "Questions",
            categoryAnalysis: "Category Analysis",
            allCategories: "All Categories",
            searchPlaceholder: "Search questions...",
            noResults: "No questions found. Try adjusting your search.",
            viewAll: "View all",
            questionsText: "questions",
        },
        es: {
            title: "Transmisiones AMA Beep-boop",
            questions: "Preguntas",
            categoryAnalysis: "Análisis de Categorías",
            allCategories: "Todas las Categorías",
            searchPlaceholder: "Buscar preguntas...",
            noResults: "No se encontraron preguntas. Intente ajustar su búsqueda.",
            viewAll: "Ver todas",
            questionsText: "preguntas",
        },
        tr: {
            title: "Bip-bop AMA İletileri",
            questions: "Sorular",
            categoryAnalysis: "Kategori Analizi",
            allCategories: "Tüm Kategoriler",
            searchPlaceholder: "Soruları ara...",
            noResults: "Soru bulunamadı. Aramanızı ayarlamayı deneyin.",
            viewAll: "Tümünü görüntüle",
            questionsText: "sorular",
        },
        ru: {
            title: "Бип-буп AMA Трансляции",
            questions: "Вопросы",
            categoryAnalysis: "Анализ Категорий",
            allCategories: "Все Категории",
            searchPlaceholder: "Поиск вопросов...",
            noResults: "Вопросы не найдены. Попробуйте изменить параметры поиска.",
            viewAll: "Посмотреть все",
            questionsText: "вопросы",
        },
        zh: {
            title: "哔-哔 AMA 传输",
            questions: "问题",
            categoryAnalysis: "类别分析",
            allCategories: "所有类别",
            searchPlaceholder: "搜索问题...",
            noResults: "未找到问题。尝试调整您的搜索。",
            viewAll: "查看全部",
            questionsText: "问题",
        },
        ko: {
            title: "삐뽀-부프 AMA 전송",
            questions: "질문",
            categoryAnalysis: "카테고리 분석",
            allCategories: "모든 카테고리",
            searchPlaceholder: "질문 검색...",
            noResults: "질문을 찾을 수 없습니다. 검색을 조정해 보세요.",
            viewAll: "모두 보기",
            questionsText: "질문",
        },
        pt: {
            title: "Transmissões AMA Bipe-bipe",
            questions: "Perguntas",
            categoryAnalysis: "Análise de Categorias",
            allCategories: "Todas as Categorias",
            searchPlaceholder: "Buscar perguntas...",
            noResults: "Nenhuma pergunta encontrada. Tente ajustar sua busca.",
            viewAll: "Ver todas",
            questionsText: "perguntas",
        }
    };

    // Widget state
    let state = {
        activeCategory: 'all',
        searchQuery: '',
        container: null,
        widget: null,
        uiLanguage: 'en' // Default UI language
    };

    // Widget view modes
    const ViewMode = {
        QUESTIONS: 'questions',
        ANALYSIS: 'analysis'
    };

    // Create widget elements
    function createWidget(container) {
        // Update state with default view mode
        state.viewMode = ViewMode.QUESTIONS;
        
        // Create main widget structure
        const widget = document.createElement('div');
        widget.className = 'metis-ama-widget fade-in';
        
        // Add widget header
        const header = document.createElement('div');
        header.className = 'widget-header';
        
        const title = document.createElement('h2');
        title.className = 'widget-title';
        title.innerHTML = '<img src="https://cdn.prod.website-files.com/668e9a776360a4da95d5fc33/679cad381e67f23ff4806949_Robit1.png" alt="RoBIT" /> <span class="title-text">Beep-boop AMA Transmissions</span>';
        
        const controls = document.createElement('div');
        controls.className = 'widget-controls';
        
        // Add language selector
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        
        const languageButton = document.createElement('button');
        languageButton.className = 'language-button';
        const currentLang = uiLanguages.find(lang => lang.code === state.uiLanguage);
        languageButton.innerHTML = `${currentLang.flag} ${currentLang.name}`;
        
        const languageDropdown = document.createElement('div');
        languageDropdown.className = 'language-dropdown';
        
        uiLanguages.forEach(lang => {
            const langOption = document.createElement('div');
            langOption.className = 'language-option';
            langOption.setAttribute('data-lang', lang.code);
            langOption.innerHTML = `${lang.flag} ${lang.name}`;
            
            // Add active class to current language
            if (lang.code === state.uiLanguage) {
                langOption.classList.add('active');
            }
            
            langOption.addEventListener('click', () => {
                // Update language
                state.uiLanguage = lang.code;
                
                // Update button text with flag
                const selectedLang = uiLanguages.find(l => l.code === lang.code);
                languageButton.innerHTML = `${selectedLang.flag} ${selectedLang.name}`;
                
                // Update active class
                languageDropdown.querySelectorAll('.language-option').forEach(option => {
                    option.classList.remove('active');
                });
                langOption.classList.add('active');
                
                // Update UI text and re-render questions
                updateUILanguage();
                
                // Re-render questions in the new language
                if (state.viewMode === ViewMode.QUESTIONS) {
                    const questionsContainer = document.querySelector('.questions-container');
                    if (questionsContainer) {
                        renderQuestions(questionsContainer, getFilteredQuestions());
                    }
                }
            });
            
            languageDropdown.appendChild(langOption);
        });
        
        languageButton.addEventListener('click', () => {
            languageDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                languageDropdown.classList.remove('show');
            }
        });
        
        languageSelector.appendChild(languageButton);
        languageSelector.appendChild(languageDropdown);
        controls.appendChild(languageSelector);
        
        // Add view mode switch buttons
        const viewModeSwitch = document.createElement('div');
        viewModeSwitch.className = 'view-mode-switch';
        
        const questionsBtn = document.createElement('button');
        questionsBtn.className = 'view-mode-btn active';
        questionsBtn.setAttribute('data-mode', ViewMode.QUESTIONS);
        questionsBtn.textContent = 'Questions';
        
        const analysisBtn = document.createElement('button');
        analysisBtn.className = 'view-mode-btn';
        analysisBtn.setAttribute('data-mode', ViewMode.ANALYSIS);
        analysisBtn.textContent = 'Category Analysis';
        
        viewModeSwitch.appendChild(questionsBtn);
        viewModeSwitch.appendChild(analysisBtn);
        controls.appendChild(viewModeSwitch);
        
        header.appendChild(title);
        header.appendChild(controls);
        widget.appendChild(header);
        
        // Add category tabs (only visible in questions mode)
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'category-tabs';
        
        // Add "All Categories" tab
        const allCategoriesTab = document.createElement('div');
        allCategoriesTab.className = 'category-tab active';
        allCategoriesTab.setAttribute('data-category', 'all');
        allCategoriesTab.textContent = 'All Categories';
        
        // Calculate total questions
        const totalQuestions = amaData.categories.reduce((sum, category) => sum + category.count, 0);
        
        const countSpan = document.createElement('span');
        countSpan.className = 'count';
        countSpan.textContent = totalQuestions;
        allCategoriesTab.appendChild(countSpan);
        
        tabsContainer.appendChild(allCategoriesTab);
        
        // Add category tabs
        amaData.categories.forEach(category => {
            const tab = document.createElement('div');
            tab.className = 'category-tab';
            tab.setAttribute('data-category', category.id);
            tab.textContent = category.name;
            
            const countSpan = document.createElement('span');
            countSpan.className = 'count';
            countSpan.textContent = category.count;
            tab.appendChild(countSpan);
            
            tabsContainer.appendChild(tab);
        });
        
        widget.appendChild(tabsContainer);
        
        // Add search input
        const searchBox = document.createElement('div');
        searchBox.className = 'search-box';
        
        const searchInput = document.createElement('input');
        searchInput.className = 'search-input';
        searchInput.type = 'text';
        searchInput.placeholder = 'Search questions...';
        
        searchBox.appendChild(searchInput);
        widget.appendChild(searchBox);
        
        // Add questions container
        const questionsContainer = document.createElement('div');
        questionsContainer.className = 'questions-container';
        widget.appendChild(questionsContainer);
        
        // Initial render of all questions
        renderQuestions(questionsContainer, getAllQuestions());
        
        // Add event listeners
        // Category tabs click
        tabsContainer.addEventListener('click', (e) => {
            const tab = e.target.closest('.category-tab');
            if (tab) {
                // Remove active class from all tabs
                tabsContainer.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Update state and render
                state.activeCategory = tab.getAttribute('data-category');
                renderQuestions(questionsContainer, getFilteredQuestions());
            }
        });
        
        // Search input
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase();
            renderQuestions(questionsContainer, getFilteredQuestions());
        });
        
        // Add analysis container (initially hidden)
        const analysisContainer = document.createElement('div');
        analysisContainer.className = 'analysis-container';
        analysisContainer.style.display = 'none';
        widget.appendChild(analysisContainer);
        
        // Add event listeners for view mode buttons
        viewModeSwitch.addEventListener('click', (e) => {
            const btn = e.target.closest('.view-mode-btn');
            if (!btn) return;
            
            const mode = btn.getAttribute('data-mode');
            
            // Skip if already in this mode
            if (state.viewMode === mode) return;
            
            // Update buttons
            viewModeSwitch.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update state
            state.viewMode = mode;
            
            // Toggle visibility
            if (mode === ViewMode.QUESTIONS) {
                tabsContainer.style.display = 'flex';
                searchBox.style.display = 'block';
                questionsContainer.style.display = 'block';
                analysisContainer.style.display = 'none';
            } else {
                tabsContainer.style.display = 'none';
                searchBox.style.display = 'none';
                questionsContainer.style.display = 'none';
                analysisContainer.style.display = 'block';
                
                // Render analysis view if not already rendered
                if (analysisContainer.children.length === 0) {
                    renderAnalysisView(analysisContainer);
                }
            }
        });
        
        // Store references
        state.widget = widget;
        
        return widget;
    }
    
    // Create and render the analysis view
    function renderAnalysisView(container) {
        // Clear container
        container.innerHTML = '';
        
        // Create chart container
        const chartContainer = document.createElement('div');
        chartContainer.className = 'chart-container';
        container.appendChild(chartContainer);
        
        // Create SVG for donut chart
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'donut-chart');
        svg.setAttribute('viewBox', '0 0 100 100');
        chartContainer.appendChild(svg);
        
        // Calculate chart segments
        const totalPercentage = categoryAnalysis.reduce((total, cat) => total + cat.percentage, 0);
        let currentAngle = 0;
        
        // Create chart segments
        categoryAnalysis.forEach((category, index) => {
            const percentage = category.percentage;
            const angleSize = (percentage / totalPercentage) * 360;
            
            // Calculate coordinates
            const startAngle = currentAngle;
            const endAngle = currentAngle + angleSize;
            currentAngle = endAngle;
            
            const startRadians = (startAngle - 90) * Math.PI / 180;
            const endRadians = (endAngle - 90) * Math.PI / 180;
            
            const startX = 50 + 40 * Math.cos(startRadians);
            const startY = 50 + 40 * Math.sin(startRadians);
            const endX = 50 + 40 * Math.cos(endRadians);
            const endY = 50 + 40 * Math.sin(endRadians);
            
            // Create path for segment
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            const largeArcFlag = angleSize > 180 ? 1 : 0;
            
            // Create SVG path
            const d = [
                `M 50 50`,
                `L ${startX} ${startY}`,
                `A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `Z`
            ].join(' ');
            
            path.setAttribute('d', d);
            path.setAttribute('fill', `var(--cat-${category.id})`);
            path.setAttribute('class', 'chart-segment');
            path.setAttribute('data-category', category.id);
            
            svg.appendChild(path);
            
            // Add click handler to segment
            path.addEventListener('click', () => {
                selectCategoryAnalysis(category.id);
            });
            
            // Add percentage label
            const midAngle = (startAngle + endAngle) / 2;
            const midRadians = (midAngle - 90) * Math.PI / 180;
            
            // Position label at middle of segment
            const labelRadius = 25; // Inside the donut
            const labelX = 50 + labelRadius * Math.cos(midRadians);
            const labelY = 50 + labelRadius * Math.sin(midRadians);
            
            const label = document.createElement('div');
            label.className = 'segment-label';
            label.textContent = `${percentage}%`;
            label.style.left = `${labelX}%`;
            label.style.top = `${labelY}%`;
            
            chartContainer.appendChild(label);
        });
        
        // Add RoBIT character
        const robitContainer = document.createElement('div');
        robitContainer.className = 'robit-container';
        
        const robit = document.createElement('div');
        robit.className = 'robit';
        
        const speechBubble = document.createElement('div');
        speechBubble.className = 'speech-bubble';
        speechBubble.textContent = "Hello Beep! You found my thought-sphere... *glitch* Your community has such cosmic queries! Makes RoBIT's circuits hum with joy.";
        
        robitContainer.appendChild(robit);
        robitContainer.appendChild(speechBubble);
        chartContainer.appendChild(robitContainer);
        
        // Add category details section
        const categoryDetails = document.createElement('div');
        categoryDetails.className = 'category-details';
        container.appendChild(categoryDetails);
        
        // Select the first category by default
        selectCategoryAnalysis(categoryAnalysis[0].id);
    }
    
    // Select a category for detailed analysis
    function selectCategoryAnalysis(categoryId) {
        // Get category
        const category = categoryAnalysis.find(c => c.id === categoryId);
        if (!category) return;
        
        // Update chart segments
        const chartSegments = document.querySelectorAll('.chart-segment');
        chartSegments.forEach(segment => {
            if (segment.getAttribute('data-category') === categoryId) {
                segment.classList.add('active');
            } else {
                segment.classList.remove('active');
            }
        });
        
        // Update RoBIT speech bubble
        const speechBubble = document.querySelector('.speech-bubble');
        speechBubble.textContent = `Beep detected! *glitch* ${category.percentage}% of your cosmic queries orbit around ${category.name.toLowerCase()}. Such collective curiosity! Future alpha: knowledge clusters reveal where the Universe (or at least Hyperion) is expanding ✨`;
        
        // Update category details
        const categoryDetails = document.querySelector('.category-details');
        categoryDetails.innerHTML = '';
        
        // Add category title
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        
        const percentageSpan = document.createElement('span');
        percentageSpan.textContent = `${category.percentage}%`;
        
        categoryTitle.appendChild(percentageSpan);
        categoryTitle.appendChild(document.createTextNode(` ${category.name}`));
        categoryDetails.appendChild(categoryTitle);
        
        // Add category description
        const categoryDesc = document.createElement('div');
        categoryDesc.className = 'category-description';
        categoryDesc.textContent = `${category.description} Focuses on: ${category.focus}`;
        categoryDetails.appendChild(categoryDesc);
        
        // Add themes and top questions
        const themesList = document.createElement('div');
        themesList.className = 'themes-list';
        
        // Loop through each theme
        category.themes.forEach((theme, index) => {
            const themeSection = document.createElement('div');
            themeSection.className = 'theme-section';
            
            // Theme header
            const themeHeader = document.createElement('div');
            themeHeader.className = 'theme-header';
            themeHeader.setAttribute('data-theme-index', index);
            
            const themeBullet = document.createElement('span');
            themeBullet.className = 'theme-bullet';
            
            const themeTitle = document.createElement('div');
            themeTitle.className = 'theme-title';
            themeTitle.textContent = theme.name;
            
            const toggleIcon = document.createElement('span');
            toggleIcon.className = 'toggle-icon';
            toggleIcon.textContent = '›';
            
            themeHeader.appendChild(themeBullet);
            themeHeader.appendChild(themeTitle);
            themeHeader.appendChild(toggleIcon);
            
            themeSection.appendChild(themeHeader);
            
            // Theme questions (initially hidden)
            const themeQuestions = document.createElement('div');
            themeQuestions.className = 'theme-questions';
            
            // Add each question
            theme.questions.forEach((question, qIndex) => {
                const questionEl = document.createElement('div');
                questionEl.className = 'theme-question';
                questionEl.textContent = question;
                themeQuestions.appendChild(questionEl);
                
                // Add translation if available
                if (theme.translations && theme.translations[qIndex]) {
                    const translationEl = document.createElement('div');
                    translationEl.className = 'translation';
                    translationEl.textContent = theme.translations[qIndex];
                    questionEl.appendChild(translationEl);
                }
            });
            
            themeSection.appendChild(themeQuestions);
            
            // Add event listener to toggle questions
            themeHeader.addEventListener('click', () => {
                themeSection.classList.toggle('expanded');
            });
            
            themesList.appendChild(themeSection);
        });
        
        categoryDetails.appendChild(themesList);
        
        // Add "View all questions" link
        const viewAllLink = document.createElement('a');
        viewAllLink.href = '#';
        viewAllLink.className = 'view-all-link';
        viewAllLink.textContent = `View all ${category.name} questions →`;
        
        // Add event listener to switch to questions view
        viewAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Find the category tab that matches this analysis category
            const matchingCategory = amaData.categories.find(c => 
                c.name.toLowerCase().includes(category.id) || 
                category.name.toLowerCase().includes(c.id));
            
            if (matchingCategory) {
                // Switch to questions view and select matching category
                document.querySelector(`.view-mode-btn[data-mode="${ViewMode.QUESTIONS}"]`).click();
                document.querySelector(`.category-tab[data-category="${matchingCategory.id}"]`).click();
            } else {
                // Just switch to questions view
                document.querySelector(`.view-mode-btn[data-mode="${ViewMode.QUESTIONS}"]`).click();
            }
        });
        
        categoryDetails.appendChild(viewAllLink);
    }
    
    // Get all questions from all categories
    function getAllQuestions() {
        return amaData.categories.flatMap(category => {
            return category.questions.map(question => {
                return {
                    ...question,
                    category: category.id,
                    categoryName: category.name
                };
            });
        });
    }
    
    // Filter questions based on active category and search query
    function getFilteredQuestions() {
        let questions = getAllQuestions();
        
        // Filter by category if not 'all'
        if (state.activeCategory !== 'all') {
            questions = questions.filter(q => q.category === state.activeCategory);
        }
        
        // Filter by search query if present
        if (state.searchQuery) {
            questions = questions.filter(q => {
                // Search in question text
                if (q.text.toLowerCase().includes(state.searchQuery)) {
                    return true;
                }
                
                // Search in translation if available
                if (q.translation && q.translation.toLowerCase().includes(state.searchQuery)) {
                    return true;
                }
                
                return false;
            });
        }
        
        return questions;
    }
    
    // Function to update UI text based on selected language
    function updateUILanguage() {
        const currentTranslation = translations[state.uiLanguage];
        
        // Update title text
        document.querySelector('.title-text').textContent = currentTranslation.title;
        
        // Update view mode buttons
        document.querySelector(`.view-mode-btn[data-mode="${ViewMode.QUESTIONS}"]`).textContent = currentTranslation.questions;
        document.querySelector(`.view-mode-btn[data-mode="${ViewMode.ANALYSIS}"]`).textContent = currentTranslation.categoryAnalysis;
        
        // Update "All Categories" tab
        const allCategoriesTab = document.querySelector('.category-tab[data-category="all"]');
        if (allCategoriesTab) {
            allCategoriesTab.childNodes[0].textContent = currentTranslation.allCategories;
        }
        
        // Update search placeholder
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.placeholder = currentTranslation.searchPlaceholder;
        }
        
        // Update no results message if visible
        const noResultsMessage = document.querySelector('.no-results p');
        if (noResultsMessage) {
            noResultsMessage.textContent = currentTranslation.noResults;
        }
        
        // Update view all links
        document.querySelectorAll('.view-all-link').forEach(link => {
            const categoryName = link.textContent.split(' ').slice(2).join(' ').replace(' →', '');
            link.textContent = `${currentTranslation.viewAll} ${categoryName} ${currentTranslation.questionsText} →`;
        });
    }
    
    // Translate a question to the current UI language
    function translateQuestion(question) {
        // If question is already in the user's selected language, return it as-is
        if (question.language === state.uiLanguage) {
            return {
                text: question.text,
                isNative: true
            };
        }
        
        // If we're in English mode and the question has a translation (from another language)
        if (state.uiLanguage === 'en' && question.translation) {
            return {
                text: question.translation,
                isNative: false,
                originalText: question.text,
                originalLanguage: question.language
            };
        }
        
        // For other language combinations, we'll simulate a translation
        // Note: In a production environment, this would use a real translation service or pre-translated content
        
        // If the question is in English, translate to the target language
        if (question.language === 'en') {
            // Simulated translations (these would be actual translations in production)
            const simulatedTranslations = {
                es: {
                    prefix: "Traducido: ",
                    originalLabel: "Original (inglés)"
                },
                tr: {
                    prefix: "Çevrilmiş: ",
                    originalLabel: "Orijinal (İngilizce)"
                },
                ru: {
                    prefix: "Переведено: ",
                    originalLabel: "Оригинал (английский)"
                },
                zh: {
                    prefix: "已翻译: ",
                    originalLabel: "原文 (英文)"
                },
                ko: {
                    prefix: "번역됨: ",
                    originalLabel: "원본 (영어)"
                },
                pt: {
                    prefix: "Traduzido: ",
                    originalLabel: "Original (inglês)"
                },
                de: {
                    prefix: "Übersetzt: ",
                    originalLabel: "Original (Englisch)"
                }
            };
            
            return {
                text: simulatedTranslations[state.uiLanguage]?.prefix + question.text,
                isNative: false,
                originalText: question.text,
                originalLanguage: question.language,
                originalLabel: simulatedTranslations[state.uiLanguage]?.originalLabel || "Original (English)"
            };
        }
        
        // If question is in another language and has a translation, translate from English to target
        if (question.translation) {
            // First get the English translation
            const englishText = question.translation;
            
            // Then simulate translating from English to target language
            const simulatedTranslations = {
                es: {
                    prefix: "Traducido: ",
                    originalLabel: `Original (${languages[question.language]})`
                },
                tr: {
                    prefix: "Çevrilmiş: ",
                    originalLabel: `Orijinal (${languages[question.language]})`
                },
                ru: {
                    prefix: "Переведено: ",
                    originalLabel: `Оригинал (${languages[question.language]})`
                },
                zh: {
                    prefix: "已翻译: ",
                    originalLabel: `原文 (${languages[question.language]})`
                },
                ko: {
                    prefix: "번역됨: ",
                    originalLabel: `원본 (${languages[question.language]})`
                },
                pt: {
                    prefix: "Traduzido: ",
                    originalLabel: `Original (${languages[question.language]})`
                },
                de: {
                    prefix: "Übersetzt: ",
                    originalLabel: `Original (${languages[question.language]})`
                }
            };
            
            return {
                text: simulatedTranslations[state.uiLanguage]?.prefix + englishText,
                isNative: false,
                originalText: question.text,
                originalLanguage: question.language,
                originalLabel: simulatedTranslations[state.uiLanguage]?.originalLabel || `Original (${languages[question.language]})`
            };
        }
        
        // Fallback - just return the original with a note
        return {
            text: `[${languages[question.language]}] ` + question.text,
            isNative: false,
            noTranslation: true
        };
    }
    
    // Render questions to container
    function renderQuestions(container, questions) {
        container.innerHTML = '';
        
        // Add or remove all-categories-view class based on active category
        if (state.activeCategory === 'all') {
            container.classList.add('all-categories-view');
        } else {
            container.classList.remove('all-categories-view');
        }
        
        if (questions.length === 0) {
            // No results found
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            
            const icon = document.createElement('div');
            icon.className = 'no-results-icon';
            icon.textContent = '🔍';
            
            const message = document.createElement('p');
            message.textContent = translations[state.uiLanguage].noResults;
            
            noResults.appendChild(icon);
            noResults.appendChild(message);
            container.appendChild(noResults);
            return;
        }
        
        // Create question cards
        questions.forEach((question, index) => {
            const card = document.createElement('div');
            card.className = 'question-card slide-in';
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            card.setAttribute('aria-labelledby', `question-${index}`);
            
            // Category tag - only visible in All Categories view thanks to CSS
            const categoryTag = document.createElement('span');
            categoryTag.className = 'category-tag';
            categoryTag.textContent = question.categoryName;
            
            // Language tag - showing current UI language instead of the original
            const languageTag = document.createElement('span');
            languageTag.className = 'question-language';
            languageTag.textContent = languages[state.uiLanguage] || state.uiLanguage;
            languageTag.setAttribute('title', `Displayed in ${languages[state.uiLanguage] || state.uiLanguage}`);
            
            // Translate the question to current UI language
            const translatedQuestion = translateQuestion(question);
            
            // Question text
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.id = `question-${index}`;
            questionText.textContent = translatedQuestion.text;
            
            // Add a translated badge if not in the native language
            if (!translatedQuestion.isNative) {
                questionText.classList.add('translated');
                
                const translatedBadge = document.createElement('span');
                translatedBadge.className = 'translated-badge';
                translatedBadge.textContent = '🌐';
                translatedBadge.setAttribute('title', 'Machine translated');
                
                questionText.appendChild(translatedBadge);
            }
            
            card.appendChild(categoryTag);
            card.appendChild(languageTag);
            card.appendChild(questionText);
            
            // Add original text if it's a translation
            if (!translatedQuestion.isNative && !translatedQuestion.noTranslation) {
                const originalText = document.createElement('div');
                originalText.className = 'original-text';
                
                const originalLabel = document.createElement('span');
                originalLabel.className = 'original-label';
                originalLabel.textContent = translatedQuestion.originalLabel || `Original (${languages[question.language]})`;
                
                originalText.appendChild(originalLabel);
                originalText.appendChild(document.createTextNode(translatedQuestion.originalText));
                
                card.appendChild(originalText);
            }
            
            container.appendChild(card);
        });
    }
    
    // Public interface
    return {
        init: function(options) {
            // Get container
            const containerId = options.container || 'metis-ama-widget';
            const container = document.getElementById(containerId);
            
            if (!container) {
                console.error(`Metis AMA Widget: Container with id "${containerId}" not found.`);
                return;
            }
            
            state.container = container;
            
            // Create and render widget
            const widget = createWidget(container);
            container.appendChild(widget);
        }
    };
})();
