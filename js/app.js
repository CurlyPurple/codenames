
/*-------------------------------- Constants --------------------------------*/
const wordPool = {
    THEORY: ['APPROACH', 'ARGUMENT', 'ASSUMPTION', 'CONCEPT', 'IDEA', 'IDEOLOGY', 'WORKSPACE', 'STUDY', 'RESEARCH',
        'METHOD','PHILOSOPHY','PLAN','POSITION','PREMISE','PROPOSAL','RATIONALE', 'SPECULATION', 'ACADEMIC', 'EXPECTATION',
        'SUSPICION', 'SYSTEM', 'THESIS', 'UNDERSTANDING', 'BASIS', 'FEELING', 'GUESS', 'HUNCH', 'RECIPE', 'CUISINE', 'MENU',
        'OUTLOOK', 'PRESUMPTION', 'SURMISE','HYPOTHESIS', 'SUGGESTION', 'GENERALIZATION', 'INKLING', 'FORECAST', 'ANTICIPATION',
        'SPEAKER', 'NATURE', 'DARWIN', 'SCIENCE', 'RUMOR', 'QUESTION','CONSPIRACY', 'EVOLUTION', 'MODEL', 'EXPERIMENT', 'PREDICTION', 'RESULT',
        'CONSEQUENCE', 'CONCLUSION', 'MANIFESTATION', 'AGE', 'MILESTONE', 'CYCLE', 'OCCASION', 'LIMITATION', 'SUSCEPTIBILITY',
        'EXCHANGE', 'VALUE', 'ECONOMY', 'RATE', 'DENSITY', 'CAPACITY', 'MAGNITUDE', 'INTENSITY', 'EARNINGS', 'REVENUE', 'PROFIT', 'YIELD',
        'LINK', 'ASSOCIATION', 'CORRELATION', 'FRAMEWORK', 'MODEL', 'DEPICTION', 'DEVOTION', 'PASSION', 'FEELING', 'COMMUNICATION',
        'MESSAGE', 'MESSAGING', 'PLATFORM', 'IMPLICATION', 'RAMIFICATION', 'EFFECT', 'TOPPINGS','SLICE', 'HEALTH', 'HABITS', 'ADDICTION',
        'EROSION', 'FERTILITY', 'PEDAGOGY', 'INSTRUCTION', 'EDUCATION', 'GUIDANCE', 'INTERCONNECTION', 'INTERDEPENDENCE', 'BREWING',
        'FERMENTATION', 'CRAFT', 'EPISTEMOLOGY', 'COGNITION', 'INSIGHT', 'OPTIMIZATION', 'ENHANCEMENT', 'DEVELOPMENT', 'REFINEMENT', 'SOLUTION',
        'SETTLEMENT', 'REMUNERATION', 'EXCHANGE', 'TRANSACTION', 'CONSUMER', 'PATRON', 'CLIENT', 'PHILANTHROPY', 'ALTRUISM', 'BENEFACTION',
        'RISK', 'CHALLENGE', 'ENTERPRISE', 'VENTURE', 'LEADERSHIP', 'INNOVATION', 'MERIT', 'REWARD', 'INCENTIVE', 'AUTHORIZATION', 'SANCTION',
        'CLEARANCE', 'CONSENT', 'ANALYSIS', 'EVALUATION', 'CRITIQUE', 'ASSESSMENT', 'SPECIFICATION', 'CRITERION', 'STIPULATION', 'TOOL',
        'PSYCHOLOGY', 'TRAITS', 'DISPOSITION', 'BLEND', 'TIMBER', 'AXIOM', 'RUBBISH', 'CONJECTURE', 'POSTULATE', 'ASSERTION', 'SPECULATION',
        'IDEATION', 'UNION', 'PARTNERSHIP', 'BOND', 'DISCOVERY', 'INNOVATION', 'BREAKTHROUGH', 'EPIPHANY', 'OPHTHALMOLOGY', 'IRIDOLOGY', 'CLASSROOM',
        'LEARNING', 'EDUCATION', 'METEOROLOGY', 'FORECAST', 'ATMOSPHERE', 'MYTHOLOGY', 'FANTASY', 'DEPTH', 'CURRENT', 'WAVE', 'STRATEGY',
        'TACTICS', 'DOCTRINE','EVOLUTION'],
         OUTCOME: ['EVENT', 'FALLOUT', 'ISSUE',  'RESULT', 'CONSEQUENCE', 'CONCLUSION', 'MANIFESTATION', 'COMMITMENT', 'BOND',
        'REACTION', 'AFTEREFFECT', 'AFTERMATH', 'END', 'PAYBACK', 'SCORE', 'CAUSE', 'WIN','EFFECT','JUSTIFY','REASON','FINISH',
        'DECISION', 'SITUATION', 'SCENARIO', 'EXPERIENCE', 'FATE', 'FUTURE', 'REWARD', 'VICTORIOUS', 'PATH', 'GAME', 'RAMIFICATION',
        'LOSE', 'VERDICT', 'MODEL', 'EXPERIMENT', 'PREDICTION', 'PAPERWORK', 'EVALUATION', 'REPORT', 'RECIPE', 'FEAST', 'DESTINATION',
        'CONCLUSION', 'ENDPOINT', 'WISH', 'MILESTONE', 'CELEBRATION', 'RISK', 'FLAW', 'INVESTMENT', 'VALUE', 'OUTPUT', 'YIELD', 'RETURN',
        'PROFIT', 'REVENUE', 'EARNINGS', 'DISCOVERY', 'INNOVATION', 'LINK', 'DEFEAT', 'VICTORY', 'SUMMARY', 'OVERVIEW', 'STORY', 'MESSAGE',
        'CARRYOUT', 'DELIVERY', 'HABIT', 'DEATH', 'ADDICTION', 'HEMORRHAGE', 'DONATION', 'GROWTH', 'PROGRESS', 'DEVELOPMENT',
        'COMMUNICATION', 'COMMITMENT', 'DRUNK', 'WISDOM', 'INSIGHT', 'ADVANCEMENT', 'ENHANCEMENT', 'SETTLEMENT', 'INVOICE',
        'REMUNERATION', 'EXPERIENCE', 'FEEDBACK', 'SATISFACTION', 'SUPPORT', 'CONTRIBUTION', 'IMPACT', 'LESSON', 'COMPENSATION', 'REWARD',
        'AUTHORIZATION', 'APPROVAL', 'VERDICT', 'RULING', 'TREASURE', 'ATTITUDE', 'FOCUS', 'ENERGY', 'FINISH', 'HOME', 'HOUSE', 'WASTE',
        'CREATION', 'FAMILY', 'CHILDREN', 'UNION', 'SUCCESS', 'TRIUMPH', 'UTILIZATION', 'LEARNING', 'MASTERY', 'INSIGHT', 'PATTERN',
        'LEGEND', 'MYTH', 'EXPLORATION', 'DISCOVERY'],
        DESK: ['COUNTER', 'STANDING', 'SECRETARY', 'WORK', 'WORKSPACE', 'DAVENPORT', 'SCHOOL', 'WRITING', 'WOODEN', 'HOLD',
        'OFFICE', 'CHAIR', 'HOMEWORK','TABLE', 'ROOM', 'WORKSTATION', 'RECEPTIONIST', 'RECEPTION', 'STUDY', 'RESEARCH', 'ACADEMIC',
        'TECH', 'GAMING', 'STATION', 'PAPERWORK', 'EVALUATION', 'REPORT', 'CAFETERIA', 'LUNCH', 'WELCOME', 'FRONT', 'ENTRY',
        'GIFT', 'DECORATION', 'SUPPORT', 'ERGONOMICS', 'REST', 'ADJUSTMENT', 'TRADING', 'EXCHANGE', 'PAYROLL', 'EXPERIMENT',
        'LABORATORY', 'NETWORK', 'BRIDGE', 'CATALOG', 'DOCUMENT', 'INVENTORY', 'AFFAIR', 'PRESS', 'NEWS', 'NEWSROOM', 'EDITOR',
        'ENFORCEMENT', 'POLICY', 'ORDER', 'DELIVERY', 'ASHTRAY', 'LIGHTER', 'EMERGENCY', 'INJURY', 'CLEANUP', 'MESS', 'GYM', 'TEAMWORK',
        'COMMUNICATION', 'PARTNERSHIP', 'TAP', 'LIBRARY', 'RESEARCH', 'SCHOLAR', 'UPGRADE', 'COMPUTER', 'PAYROLL', 'BILLING',
        'SERVICE', 'VOLUNTEER', 'FUNDRAISING', 'FLAW', 'COLLAPSE', 'PROJECT', 'BOSS', 'DECISION', 'SPECIFICATION', 'COMPARTMENT', 'DRAWER',
        'STORAGE', 'CABINET', 'MUG', 'BREAK', 'OAK', 'MAHOGANY', 'CHERRY', 'WALNUT', 'CLUTTER', 'MESS', 'JUNK', 'EMAIL', 'DAYDREAM',
        'CREATIVE', 'ORGANIZATION', 'SUCCESS', 'HUMAN', 'ASSIGNMENT', 'CLASSROOM', 'THERMOSTAT', 'TEMPERATURE', 'SCROLL', 'HOARD',
        'BLUE', 'BLUEPRINT'],
        MEAL: ['SNACK', 'BREAKFAST', 'LUNCH', 'DINNER', 'FOOD', 'KNIFE', 'FORK', 'SPOON', 'CUISINE', 'GOURMET', 'RECIPE',
        'MENU', 'DISH', 'FEAST', 'ENTREE', 'STEAK', 'EAT', 'PICNIC', 'RESTAURANT','NUTRIENT', 'CAFETERIA', 'BANQUET', 'CAKE',
        'RECIPE', 'SERVICE', 'DISHES', 'KITCHEN', 'EVENT', 'DELIVERY', 'SLEEP', 'TAKEOUT', 'FREE', 'RATION', 'RECEPTION',
        'MONEY', 'THANKSGIVING', 'HEALTH', 'BUFFETT', 'COURSE', 'DOLLAR', 'MONEY', 'INGEST', 'CONSUME', 'CAFE', 'CELEBRATION',
        'INDULGENCE', 'COMFORT', 'CRAVING', 'SATIETY', 'FINE', 'TIP', 'BUFFETT', 'SPREAD', 'PLENTY', 'STAPLE', 'EARN',
        'NUTRITION', 'DIET', 'DIGESTION', 'CALORIES', 'GATHERING', 'HOSPITALITY', 'TASTING', 'PRESENTATION', 'NOURISHMENT',
        'REVIEW', 'FOODIE', 'DECADENCE', 'DIET', 'FULL', 'DELIVERY', 'TAKEOUT', 'CARRYOUT', 'APPETITE', 'BREAK', 'RARE', 'IRON',
        'FARM', 'ORGANIC', 'FRESH', 'DATE', 'FAMILY', 'CHEERS', 'PUB', 'PLAN', 'BILL', 'CHECK', 'TAB', 'SERVICE', 'FEEDBACK',
        'SATISFACTION', 'DONATION', 'BURNT', 'SPOILED', 'COOKBOOK', 'CHEF', 'DESSERT', 'TREAT', 'RESERVATION', 'INVITE', 'PALATE',
        'CRITIQUE', 'PROVISION', 'ESSENTIAL', 'BELLY', 'BRUNCH', 'CAFE', 'CAMPFIRE', 'SMOKEHOUSE', 'GRILL', 'COMPOST', 'LEFTOVER',
        'SCRAP', 'FUSION', 'EPICUREAN', 'GALA', 'FESTIVAL', 'INGREDIENTS', 'HARVEST', 'LUNCHBOX', 'SOUS', 'BARBECUE', 'PICNIC', 'PATIO',
        'ROAST', 'SEAFOOD', 'FISH', 'MESS'],
        ARRIVAL: ['DEPARTURE', 'RETURN', 'APPEARANCE', 'LANDING', 'VISIT', 'ANNOUCEMENT', 'TRIP', 'FORECAST', 'ANTICIPATION',
        'HOMECOMING', 'INCOMING', 'INCOME', 'ENTRANCE', 'WELCOME', 'PRESENCE', 'IMPENDING', 'BIRTH', 'PREDICTION', 'EXPECTATION',
        'VISITOR', 'LATE', 'SHIPPING', 'DELIVERY', 'CREATION', 'TRAVEL', 'TRAVELLING', 'HOLIDAY', 'FLIGHT', 'RESULT', 'CONCLUSION',
        'DESTINATION', 'ENDPOINT', 'RECEPTION', 'ENTRY', 'BANQUET', 'RECEPTION', 'PARTY', 'BIRTH', 'TERMINAL', 'TRAFFIC', 'SHIPMENT',
        'BAGGAGE', 'PAYCHECK', 'EXPLORATION', 'INTRODUCTION', 'REUNION', 'LIVE', 'DELIVERY', 'ZONES', 'AREAS', 'AMBULANCE',
        'TRAILS', 'FOOTPRINTS', 'APPOINTMENT', 'DATE', 'MEETUP', 'MILESTONE','FRONTLINE', 'DEPLOYMENT', 'INVASION', 'PORT',
        'HOMEROOM', 'LANDING', 'LAND', 'DEPOT', 'LANDFILL', 'DUMP', 'TRUNK'],
        BIRTHDAY: ['CELEBRATION', 'CAKE', 'GIFT', 'PARTY', 'CELEBRATE', 'SPECIAL', 'HAPPY', 'DINNER', 'CYCLE', 'DECORATION',
        'CANDLE', 'FESTIVITIES', 'GROUP', 'AGE', 'YEARLY', 'YEAR', 'SUIT', 'MONTH', 'MILESTONE', 'ANNUALLY', 'INVITATION',
        'PRESENT', 'CARD', 'BALLOONS', 'BALLOON', 'TRIP', 'FRIENDS', 'FRIEND', 'HAT', 'OCCASION', 'WISH', 'MEMORY', 'FEAST',
        'AGING','BRITTLE','TWINS', 'SPEAKERS', 'ASTROLOGY','CARBON', 'TWINS','POST','GATHERING','SOCIAL','HUNGOVER','CANDLES',
        'TREATED', 'LIT', 'CLOWN','BACKYARD','POKEMON','SEX', 'WISDOM','TREAT','FUNDRAISER','NO-SHOW','SURPRISE','ANNUAL','RESERVATION',
        'PIRATE','CELEBRITY','FREE','PINATA','CRUISE','YACHT','TALES','BARBECUE','THRILL','JOY','SUIT', 'DRESS'],
        WEAKNESS: ['STRENGTH', 'FEEBLE', 'FRAIL', 'VULNERABLE', 'SLOW', 'STRONG', 'IMPERFECT', 'LOWER', 'RISK', 'CONSEQUENCE',
        'FLIMSY', 'DILUTE', 'FEAR', 'RESIST', 'DAMAGE', 'INEFFECTIVE', 'EXHAUSTION', 'MUSCLE', 'LIMIT', 'FLAW', 'ADJUSTMENT',
        'LIMITS', 'LIMITATION', 'DETRIMENT', 'DECLINE', 'SUSCEPTIBILITY', 'VULNERABILITY', 'ERGONOMICS', 'REST', 'COMFORT',
        'CRAVING', 'SATIETY', 'INDULGENCE', 'FATIGUE', 'BIRTH','AGING', 'BRITTLE','DEPRECIATION','QUIET','MUTE','POOR','DARWIN',
        'EVOLUTION','INCOMPATIBLE','VAGUE','OBSESSED','ADDICTING','HEMOPHOBIA','BARREN','STRENGTH','CHEATING','DUMB','BLURRY',
        'COLLAPSE','DECAF','CRACKING', 'SPLINTER','PRISONER'],
        CURRENCY: ['MONEY', 'COIN', 'DOLLAR', 'CASH', 'BANK', 'DEBT', 'COUNTRY', 'CREDIT', 'ASSET', 'EXCHANGE', 'INVESTMENT',
        'STORE', 'LIQUID', 'PAPER', 'RESOURCE', 'GOLD', 'SILVER', 'EXCHANGE', 'FINANCE', 'CRYPTO', 'DEVALUATION', 'TRADING',
        'DIGITAL', 'POWER', 'SHOP', 'BUY', 'SELL', 'FOREIGN', 'FEES', 'TRANSACTION', 'RATES', 'PLATFORM', 'ECONOMY', 'FINE', 'TIP',
        'DEBIT', 'INTEREST', 'PRODUCT', 'PRODUCTS', 'WALLET', 'PURSE', 'AMOUNT', 'COUNT', 'VALUE', 'DEVALUE', 'VALUATION', 'RATE',
        'TERMINAL','GIFT','DEPRECIATION','ECONOMY','ECONOMICS','GREED','DEBT','PURCHASE','TAXES','MEMBERSHIP','COLLAPSE','GREEN',
        'RICH','WEALTHY'],
        VOLUME: ['MASS', 'QUANTITY', 'AMOUNT','WEIGHT', 'LENGTH', 'BULK', 'MEASURE', 'GALLON', 'DENSITY', 'CAPACITY', 'MAGNITUDE',
        'PRODUCTION', 'BOOK', 'SIZE', 'PAPERBACK', 'AREA', 'MUTE', 'MUSIC', 'SOUND', 'RAISE', 'LOWER', 'INTENSITY', 'TRADING', 'MARKET',
         'LEVEL', 'DISTANCE', 'AUDIO', 'SPEAKER', 'DIMENSIONS', 'SHARES','BUSINESS', 'FINANCE', 'RESULT', 'RETURN', 'OUTPUT', 'BUFFET',
        'SPREAD', 'PLENTY', 'TRAFFIC', 'SHIPMENT', 'BAGGAGE','SPEAKERS','QUIET','MUTE','ECONOMY','RICH','WEALTHY','ABUNDANT',
        'BREWERY','GALAXY','POLYGAMY'],
        INCOME: ['WEALTH', 'PROFIT', 'REVENUE', 'SALARY', 'HOURLY', 'HUSTLE', 'MONEY', 'TAX', 'WAGE', 'EARNINGS', 'YIELD',
        'BENEFITS', 'DEBT', 'CASH', 'DEBIT', 'SAVE', 'SAVINGS', 'ACCOUNT', 'EMPLOYMENT', 'JOB', 'WORK', 'GAIN', 'PAYROLL',
        'EXPENSES', 'EXPENSE', 'ASSET', 'VALUE', 'RAISE', 'PURCHASE', 'BUY', 'CYCLE', 'CHECK','BUSINESS', 'FINANCE', 'EARN',
        'STAPLE', 'PAYCHECK', 'GIFT','POOR','ECONOMY','GREED','TAXES','RICH','WEALTHY'],
        SCIENCE: ['METHOD', 'BIOLOGY', 'CHEMISTRY', 'PHYSICS', 'MATH', 'TECHNOLOGY', 'OBSERVATION', 'HYPOTHESIS', 'LABORATORY',
        'ANALYTICS', 'EXPERIMENT', 'NATURE', 'HUMAN', 'DATA', 'PREDICT', 'PROGRESS', 'HEALTH', 'INNOVATION', 'DISCOVERY',
        'INSTITUTE', 'SCHOOL', 'EVIDENCE', 'LIFE', 'DEGREE', 'TEST', 'STRATEGY', 'GRADE', 'MUSEUM', 'MEASURE',
        'STUDY', 'FORMULA', 'FICTION', 'CONCEPT', 'TEACHER', 'INSTRUCTOR', 'HORMONES','DOPAMINE', 'SUBJECT', 'ANATOMY', 'PSYCHOLOGY',
        'NUTRITION', 'DIET', 'DIGESTION', 'CALORIES', 'EXPLORATION','ASTROLOGY', 'CARBON','DARWIN','EVOLUTION','ECONOMICS',
        'MASS','BOND','PAPER','HORMONES','JOURNALISM','BAKING','NICOTINE','ADDICTION','HEMOGLOBIN','METABOLISM','PSYCHOLOGY',
        'PACEMAKER','CAFFEINE','DILATION', 'METEOROLOGY','FIRE'],
        CONNECTION: ['BOND','LINK', 'ATTACHMENT', 'CONTACT', 'JUNCTION', 'ASSOCIATION', 'RELATE',
        'RELEVANCE', 'CONCATENATION', 'COMMUNICATION', 'HOOKUP', 'FRIEND', 'FRIENDSHIP', 'AFFILIATION', 'INCOMPATIBLE',
        'INTIMACY', 'TOGETHER', 'HISTORY', 'CORRELATION', 'INTERNET', 'SPARK', 'PING', 'SYNC', 'CONVERSATION', 'ECONOMICS',
        'FEELING', 'INTERACTION', 'PARALLELS', 'SIGNAL', 'SERVICE', 'PORT', 'NETWORK', 'CLOSE', 'PERFORMANCE', 'EXCHANGE',
        'BAD', 'GOOD', 'BRIDGE', 'INVOLVED', 'FASTEN', 'JOIN', 'NETWORK', 'GATHERING', 'HOSPITALITY', 'FLIGHT', 'TWINS'],
        DESCRIPTION: ['DEFINITION', 'TITLE', 'CHARACTERIZATION', 'EXPLANATION', 'EXPLAIN', 'NAME', 'DETAILS', 'OVERVIEW',
        'TEXT', 'PICTURE', 'STATEMENT', 'SUMMARY', 'ATTRIBUTES', 'COMMENT', 'STORY', 'MATCH', 'MATCHING', 'MATCHES',
        'ADJECTIVE', 'IDEA', 'SUSPECT', 'ABOUT', 'TRANSCRIPT', 'PARAGRAPH', 'TYPE', 'WRITE', 'INTRO', 'PAGE', 'SUMMARY',
        'REVIEW', 'VISUAL', 'VISUALIZE', 'QUOTE', 'LANGUAGE', 'MODEL', 'FRAMEWORK', 'CONCEPT', 'DEPICTION', 'CATALOG', 'PROFILE',
        'DOCUMENT', 'INVENTORY', 'MENU', 'PRESENTATION', 'INTRODUCTION', 'POST','VAGUE','PAPER'],
        LOVE: ['INTIMACY','BOND',  'ADORE', 'ROMANCE', 'PASSION', 'EMOTION', 'HEART', 'KISS', 'CUPID', 'AFFECTION', 'DEVOTION',
        'VALENTINES', 'OBSESSION', 'TOGETHER', 'BIRD', 'ROSE', 'FEELING', 'DREAM', 'SONG', 'SEX', 'GOD', 'COMMITMENT', 'SUPPORT',
        'INTEREST', 'MARRY', 'HORMONES', 'GIFT', 'LANGUAGE', 'FEAR', 'PEOPLE', 'PARTNER', 'SELF', 'FLIRTY', 'FALL', 'AFFAIR', 'SUPPORT',
        'COMFORT', 'NOURISHMENT', 'REUNION','GATHERING','OBSESSED','GREED','ABUNDANT','DOPAMINE','HEARTBREAK','AFICIONADO',
        'ADDICTION','RED','PHILOMATH','SERVICE','LIMERENCE','FAIR'],
        MEDIA: ['NEWS', 'INTERNET', 'RADIO', 'NETWORK', 'VIDEO', 'SOCIAL', 'SOUND', 'ENTERTAINMENT', 'COMPUTER', 'COVERAGE', 'PRESS',
        'PUBLIC', 'PEOPLE', 'DIGITAL', 'ONLINE', 'CLIPS', 'FOOTAGE', 'CULTURE', 'PICTURE', 'MUSIC', 'POLITICS', 'IMPACT', 'STORY',
        'AUDIENCE', 'WEB', 'INFLUENCER', 'VIEWER', 'EVENT', 'COMMUNICATION', 'MESSAGE', 'MESSAGING', 'COVERAGE', 'PLATFORM', 'EDITOR',
        'NEWSROOM', 'REVIEW', 'FOODIE', 'LIVE', 'JOURNALISM','ROMANCE','BAN'],
        CONSEQUENCE: ['RESULT', 'EFFECT', 'RAMIFICATION', 'IMPLICATION', 'IMPACT', 'CHOICE', 'PUNISHMENT', 'AFTERMATH', 'CAUSE', 'ACTION',
        'REPERCUSSION', 'BYPRODUCT', 'RISK', 'ISSUE', 'COST', 'DISCIPLINE', 'EVENT', 'PENALTY', 'PROBLEM', 'DANGER',
        'BACKLASH', 'STRESS', 'FEAR', 'DAMAGE', 'REGRET', 'SUFFER', 'FAIL', 'FAILURE', 'ENFORCEMENT', 'POLICY', 'DECADENCE',
        'DIET', 'FULL', 'HUNGOVER','DEBT','HEARTBREAK','OVERWEIGHT','DEATH','MESS'],
        PIZZA: ['CHEESE', 'FOOD', 'ITALY', 'PEPPERONI', 'TOMATO', 'BREAD', 'SAUCE', 'RESTAURANT', 'OVEN', 'LEFTOVER',
        'SLICE', 'PIE', 'DINNER', 'LUNCH', 'FROZEN', 'PINEAPPLE', 'ITALIAN', 'KITCHEN', 'FREEZER', 'MICROWAVE', 'INGEST',
        'CONSUME', 'RECIPE', 'CRUST', 'TOPPING', 'TOPPINGS', 'AROMA', 'DELIVERY', 'CARRYOUT', 'ORDER', 'MENU', 'TAKEOUT',
        'FULL','TREATED','PURCHASE','BAKING','AFICIONADO','OVERWEIGHT','FIRE', 'SMELL'],
        CIGARETTE: ['CIGAR', 'TOBACCO', 'NICOTINE', 'SMOKE', 'SMOKING', 'LUNGS', 'CANCER', 'VAPE', 'BUTT', 'SMOKER',
        'INHALE', 'GUM', 'PACK', 'DRUG', 'PUFF', 'LIGHTER', 'LIGHT', 'FIRE', 'MARLBORO', 'TAXES', 'EXPENSIVE', 'MENTHOL',
        'HIT', 'SMELL', 'FLAVOR', 'BLUNT', 'LEAF', 'ADDICTIVE', 'ADDICTING', 'ADDICT', 'PRODUCT', 'IMPORT', 'BAN', 'BANS',
        'CANCEROUS', 'ABUSE', 'HABIT', 'HABITS', 'HEALTH', 'ADDICTION', 'DEATH', 'ASHTRAY', 'APPETITE', 'BREAK', 'ZONES', 'AREAS',
        'LIT','GROUND','BURN','LITTER'],
        BLOOD: ['HEART', 'OXYGEN', 'HEMOGLOBIN', 'GORE', 'HORROR', 'STREAM', 'PLASMA', 'INFLECTION', 'ORGAN', 'ORGANS', 'HEMORRHAGE',
        'LIVER', 'VEIN', 'KIDNEY', 'BRAIN', 'CELLS', 'CELL', 'KNIFE', 'HUMAN', 'VESSEL', 'PLATELET', 'FLUID', 'LUNG', 'INJURY',
        'STOMACH', 'RED', 'IRON', 'FLUIDS', 'CLOT', 'PULSE', 'TRANSFUSION', 'MENSTRUATION', 'TYPE', 'TEST', 'ANCESTRY', 'EMERGENCY',
        'ANCESTOR', 'NUTRIENTS', 'NUTRIENT', 'CIRCULATION', 'CIRCULATE', 'INJURY', 'INJURIES', 'LABS','LAB', 'VAMPIRE',
        'SACRIFICE', 'MOON', 'ORANGE', 'MURDER', 'STAB','DONATE', 'DONATION', 'DONATIONS', 'DONOR', 'WOUND', 'VITAL', 'COAGULATION',
        'SACRIFICE', 'RARE', 'THIRST', 'AMBULANCE', 'CLOWN','HEMOPHOBIA','MONEY','HEALTH','DOCTOR','WOUND', 'WOUNDS'],
        DIRT: ['STAIN', 'STAINS', 'MUD', 'FILTH', 'CLAY', 'SOIL', 'GRIME', 'SCANDAL', 'EARTH', 'GROUND', 'DUST', 'MUCK', 'EROSION',
        'MUDDY', 'DEBRIS', 'GRASS', 'PANTS', 'SHOES', 'CLOTHES', 'CRAP', 'DITCHES', 'DITCH', 'GOSSIP', 'TRASH', 'CONTAMINATION', 'PLANTING',
        'CONTAMINATE', 'GARBAGE','POLLUTION', 'ROCKS', 'ROCK', 'MANURE', 'PLANTS', 'PLANT', 'TREES', 'TREE', 'BAREFOOT', 'STREET', 'GERMS', 'GROWING',
        'BUGS', 'INSECTS', 'BUG', 'INSECT', 'MOISTURE', 'GROW', 'FACE', 'UNCLEAN', 'SEDIMENT', 'ROAD', 'FOREST', 'POT', 'FERTILITY',
        'GARDENING', 'GROWTH', 'CLEANUP', 'MESS', 'FARM', 'ORGANIC', 'FRESH','TRAILS', 'FOOTPRINTS','PICNIC', 'BACKYARD','BARREN','GROUND'],
        TRAINER: ['WAIST', 'PHYSICAL', 'COACH', 'MANAGER', 'INSTRUCTOR', 'CONDITION', 'HORSE', 'BREEDER', 'BOX', 'BOXER', 'TEACHER',
        'GYM', 'POKEMON', 'SNEAKER', 'FITNESS', 'IMPROVEMENT', 'IMPROVE', 'PET', 'DOG', 'CAT', 'WORKOUT', 'PARTNER', 'STRENGTH',
        'STAMINA', 'BODYBUILDER', 'EXPERT', 'PROGRAM', 'PERSON', 'EXERCISE', 'MENTOR', 'TEAMMATE', 'EDUCATE', 'EDUCATOR', 'SPORTS',
        'SPORT', 'ROOKIE', 'BEGINNER', 'TEACH', 'LEARN', 'MASTERY', 'PEDAGOGY', 'INSTRUCTION', 'EDUCATION', 'GUIDE', 'GUIDANCE', 'GROWTH',
        'PERFORMANCE', 'DEVELOPMENT', 'PROGRESS', 'OFFICE', 'DIET', 'ORGANIC', 'NUTRITION', 'APPOINTMENT','MEMBERSHIP','METABOLISM'],
        RELATIONSHIP: ['FRIENDSHIP', 'DATING', 'DATE', 'PARTNER', 'PARTNERSHIP', 'TIES', 'AFFAIR', 'ASSOCIATION', 'STATE',
        'FAMILY', 'BROTHER', 'SISTER', 'FRIENDS', 'FRIEND', 'FEELINGS', 'SIGNIFICANT', 'FUTURE', 'BOUNDARIES', 'SEX', 'EMOTION', 'EMOTIONAL',
        'BREAKUP', 'LOSS', 'TRUST', 'RIFT', 'BREAK', 'COUPLE', 'HISTORY', 'CHILD', 'PARENT', 'DYNAMIC', 'TIED', 'PAIR', 'DRAMA', 'CLOSE', 'ADULT',
        'ASSOCIATION', 'INTERDEPENDENCE', 'INTERCONNECTION', 'COMMITMENT', 'COMMUNICATION', 'TEAMWORK', 'BALANCE', 'DATE', 'MEETUP',
        'CHEATING','PSYCHOLOGY'],
        BEER: ['WINE', 'DRINKS', 'DRINK', 'BEVERAGE', 'WHEAT', 'BREW', 'SUDS', 'BREWERY', 'PUBS', 'PUB', 'PINT', 'LIVER', 'GLASS', 'BOTTLE',
        'MICRO', 'DRUNK', 'PISS', 'PARTY', 'DRUG', 'ABUSE', 'OKTOBERFEST', 'ADULT', 'MONEY', 'BAR', 'INGEST', 'SIP', 'BARTENDER', 'CONSUME',
        'BREWING', 'FERMENTATION','AFICIONADO', 'CRAFT', 'TASTING', 'BLEND', 'AROMA', 'TAP', 'CHEERS', 'SHIPMENT', 'DELIVERY','HUNGOVER','PURCHASE' ],
        KNOWLEDGE: ['INFORMATION', 'SKILLS', 'EXPERTISE', 'EXPERT', 'LEARN', 'LEARNING', 'AWARE', 'AWARENESS', 'PROCESS', 'POWER', 'WISDOM',
        'INSIGHT', 'MIND', 'THINK', 'UNDERSTAND', 'SUBJECT', 'MEMORY', 'POSSESS', 'BACKGROUND', 'PERSPECTIVE', 'DATA', 'HEAD', 'CURIOSITY',
        'CURIOUS', 'BOOKS', 'STUDY', 'SCHOOL', 'CONCEPT', 'CONCEPTS','PHILOMATH', 'INTELLECT', 'SMART', 'MASTERY', 'APPLICATION', 'APPLY', 'COGNITION',
        'UNDERSTANDING', 'EPISTEMOLOGY', 'SCHOLAR', 'RESEARCH', 'STUDY', 'LIBRARY', 'DUMB','ECONOMICS','DOCTOR'],
        IMPROVEMENT: ['BETTER', 'CHANGE', 'DEVELOP', 'DEVELOPMENT', 'UPGRADE', 'RENOVATION', 'RENOVATE', 'PROGRESS', 'ADJUST', 'REFORM',
        'REPAIR', 'GROWTH', 'GROW', 'DIFFERENT', 'DIFFERENCE', 'INCREASE', 'SELF', 'HELP', 'FIX', 'WORK', 'PRACTICE', 'BOOST', 'INNOVATION',
        'FEEDBACK', 'BENEFIT', 'HEALTH', 'TIME', 'HOUSE', 'RESTORATION', 'RESTORE', 'OPTIMIZATION', 'OPTIMIZE', 'ENHANCEMENT', 'ENHANCE', 'REFINE',
        'REFINEMENT', 'GOURMET', 'DIET', 'NUTRITION', 'MILESTONE','WISDOM'],
        RESOLUTION: ['QUALITY', 'CAMERA', 'PHOTO', 'DECLARATION', 'DETERMINED', 'DETERMINATION', 'DECISION', 'DOCUMENT', 'PROPOSAL', 'DECISION',
        'COMPROMISE', 'ANSWER', 'SOLVE', 'PURPOSE', 'GRAPHICS', 'PERFORMANCE', 'RATE', 'CONFLICT', 'MONITOR', 'SCREEN', 'CLOSURE', 'DISPLAY',
        'IMAGE', 'COLOR', 'SHARP', 'LOW', 'VIDEO', 'POOR', 'CONTRAST', 'COMPUTER', 'PACT', 'DEBATE', 'SPEECH', 'SOLUTION', 'SETTLEMENT', 'CONCLUSION',
        'COMPUTER', 'PLAN','BLURRY'],
        PAYMENT: ['CREDIT', 'DEBIT', 'CHECK', 'CASH', 'REFUND', 'MONEY', 'RECEIPT', 'INSTALLMENT', 'SALARY', 'FEE', 'BONUS', 'PREMIUM', 'ROYALTY',
        'INCENTIVE', 'AMOUNT', 'COSTS', 'COST', 'SHIPPING', 'DOWN', 'BANK', 'DONATION', 'BILL', 'CHARGE', 'EMPLOYER', 'CAR', 'PROCESSING',
        'RECEIVABLE', 'SALE', 'DIRECT', 'FUNDS', 'TIPS', 'GRATUITY', 'OVERDUE', 'TUITION', 'MISSED', 'WALLET', 'CARDS', 'COMPENSATION', 'COMPENSATE',
        'EXCHANGE', 'REMUNERATION', 'TRANSACTION', 'INVOICE', 'SETTLEMENT', 'PAYROLL', 'BILLING', 'BILL', 'TAB','GIFT','TREAT','SACRIFICE'],
        CUSTOMER: ['TRANSACTION', 'CLIENT', 'EXCHANGE', 'USE', 'RETAIL', 'SHOP', 'SHOPPER', 'VENDOR', 'GOODS', 'FOOD', 'SERVICE', 'BUYER',
        'HOSPITALITY', 'PERSON', 'STORE', 'ORDER', 'RETURNS', 'ASSOCIATE', 'PRODUCTS', 'CONSUMER', 'PATRON', 'VISITOR', 'SATISFACTION',
        'EXPERIENCE', 'FEEDBACK','MONEY','PREMIUM'],
        CHARITY: ['FOUNDATION', 'MONEY', 'DONATION', 'DONATIONS', 'GIFT', 'MARKETING', 'DONATE', 'ORGANIZATION', 'PHILANTHROPY', 'FUNDRAISER',
        'FUNDRAISING', 'HANDOUT', 'FUND', 'FUNDS', 'TAXES', 'TAX', 'ORPHANS', 'ORPHAN', 'INSTITUTION', 'HELP', 'GIVEAWAY', 'DONOR', 'CELEBRITIES',
        'OFFERING', 'BENEFIT', 'AID', 'NONPROFIT', 'SERVICE', 'KINDNESS', 'KIND', 'CARE', 'RESCUE', 'POOR', 'EVENT', 'EVENTS', 'CHILDREN', 'CHILD',
        'CONTRIBUTION', 'CONTRIBUTIONS', 'ALTRUISM', 'BENEFACTION', 'GENEROUS', 'GENEROSITY', 'SUPPORT', 'IMPACT', 'VOLUNTEER', 'FOOD'],
        FAILURE: ['SUCCESS', 'LOSS', 'LOSE', 'INABILITY', 'FLOP', 'LACK', 'COLLAPSE', 'ERROR', 'MALFUNCTION', 'PROBLEM', 'PROBLEMS', 'FLUNK',
        'DEFEAT', 'MISCALCULATION', 'SYSTEM', 'BAD', 'LEARN', 'SHAME', 'RESULT', 'PAIN', 'BUGS', 'GLITCH', 'CRASH', 'AVOID', 'THREAT', 'DOUBT',
        'UNSUCCESSFUL', 'BLUNDER', 'BLOOPER', 'UNFORTUNATE', 'DISAPPOINT', 'DISAPPOINTED', 'WRONG', 'RISK', 'CHALLENGE', 'EXPERIMENT', 'HYPOTHESIS',
        'LESSON', 'EXPERIENCE', 'FLAW', 'BURNT', 'SPOILED','NO-SHOW','COLLAPSE'],
        INITIATIVE: ['PROJECT', 'EFFORT', 'PROGRAM', 'COMBAT', 'PETITION', 'FIRST', 'PLAN', 'STEPS', 'ACTION', 'LEADERSHIP', 'STRATEGY', 'POLICY',
        'PLEDGE', 'MOMENTUM', 'CREATE', 'FIGHT', 'ENERGY', 'IDEA', 'CAMPAIGN', 'EDUCATION', 'VISION', 'MEASURE', 'BEGIN', 'FUND', 'BLUEPRINT',
        'PROMISES', 'PROMISE', 'DEVELOP', 'ENTERPRISE', 'INNOVATION', 'VENTURE', 'IMPACT', 'COOKBOOK','SURPRISE'],
        BONUS: ['INCENTIVE', 'SALARY', 'REWARD', 'PREMIUM', 'RAISE', 'EXTRA', 'COMMISSION', 'PACKAGE', 'WINNINGS', 'WIN', 'SIGNING', 'PACKAGE',
        'PRIZE', 'PRIZES', 'COST', 'GIFT', 'BENEFIT', 'WAGE', 'BOOST', 'AWARD', 'OFFER', 'OFFICE', 'PAID', 'MONEY', 'COMPENSATE', 'PROMOTION',
        'PROMOTIONAL', 'YEARLY', 'ANNUAL', 'EARN', 'MERIT', 'COMPENSATION', 'PERK', 'TREAT', 'DESSERT'],
        JUDGMENT: ['OPINION', 'VALIDATION', 'DECISION', 'VERDICT', 'JUSTICE', 'COURT', 'JURY', 'LAW', 'RULING', 'GOSSIP', 'ESTIMATE', 'ESTIMATION',
        'MIND', 'FINAL', 'SOUND', 'GUILTY', 'INNOCENT', 'CRITIQUE', 'FEEL', 'FEAR', 'INTUITION', 'GUILT', 'MORAL', 'CHARACTERIZATION', 'CORRECT',
        'SENTENCE', 'ASSESSMENT', 'EVALUATION', 'ANALYSIS', 'CONCLUSION', 'REVIEW', 'PALATE','STARES'],
        REQUIREMENT: ['NECESSITY', 'RATIO', 'NECESSARY', 'PREREQUISITE', 'NEED', 'ESSENTIAL', 'MUST', 'OBLIGATION', 'MANDATORY', 'RESPONSIBILITY',
        'DEMAND', 'GUIDELINE', 'GUIDELINES', 'MINIMUM', 'LIMIT', 'LIMITATION', 'MANDATE', 'STANDARD', 'STANDARDS', 'RULES', 'THRESHOLD', 'CLAUSE',
        'QUALIFICATION', 'QUALIFICATIONS', 'CONDITION', 'MEASURE', 'FULFILL', 'CRITERIA', 'STIPULATION', 'NEEDS', 'JOB', 'BASIC', 'SPECIFICATION',
        'CRITERION', 'COMPLIANCE', 'PROVISION'],
        CHEST: [ 'NECK','HEART','PLATE', 'TORSO', 'BACK', 'LUNGS', 'LUNG', 'BREAST', 'BODY', 'BOX', 'TREASURE', 'CAVITY', 'TRUNK', 'COMPARTMENT',
        'LOOT', 'PIRATE', 'KEY', 'SKIN', 'ANATOMY', 'WOUND', 'BEAT', 'MUSCLE', 'GROW', 'PECTORAL', 'TOY', 'TOOL', 'VAULT', 'CONTAINER',
        'VICTORY', 'REWARD', 'STORAGE', 'FULL', 'BELLY', 'COLLAPSE','PACEMAKER'],
        PERSONALITY: ['CHARACTER', 'IDENTITY', 'ATTITUDE', 'TRAIT', 'EGO', 'INDIVIDUAL', 'CHARISMA', 'CHARM', 'SELF', 'DEMEANOR', 'HUMOR',
        'TEMPERAMENT', 'QUALITIES', 'EMOTION', 'EMOTIONAL', 'EXTROVERT', 'INTROVERT', 'EXTROVERTED', 'INTROVERTED', 'ATTRIBUTE', 'KIND',
        'MEAN', 'BEHAVIOR', 'BRAIN', 'CELEBRITY', 'QUIRKY', 'FLIRTY', 'PSYCHOLOGY', 'DISPOSITION', 'TRAITS', 'PROFILE', 'OFFICE', 'CRITIQUE',
        'HOSPITALITY', 'CELEBRITY','GREED'],
        COFFEE: ['DRINKS', 'DRINK', 'BEVERAGE', 'CAFFEINE', 'ESPRESSO', 'BEAN', 'ICED', 'BREW', 'CAFE', 'CONSUME', 'INGEST', 'ENERGY', 'SIP',
        'MUG', 'DECAF', 'CUP', 'ROAST', 'SHOP', 'GROW', 'BREAKFAST', 'HOT', 'COLD', 'WORK', 'OFFICE', 'DONUTS', 'POT', 'TABLE', 'MORNING',
        'BLACK', 'BLEND', 'AROMA', 'FOCUS', 'BREAK', 'BRUNCH', 'CAFE','FREE'],
        WOOD: ['TABLE', 'CABIN', 'OAK', 'LUMBER', 'MAPLE', 'TREE', 'BAMBOO', 'HARD', 'MATERIAL', 'FURNITURE', 'LOGS', 'SOIL', 'TWIGS', 'CUTTING',
        'PLY', 'TRUNK', 'PIECES', 'STURDY', 'THICK', 'HOUSE', 'FLOOR', 'PAPER', 'TREES', 'FIRE', 'CAMP', 'CAMPING', 'FOREST', 'CHERRY', 'CHIPS',
        'TERMITE', 'STOVE', 'STOVES', 'SPLINTER', 'TIMBER', 'FINISH', 'HOME', 'MAHOGANY', 'WALNUT', 'FARM', 'CAMPFIRE', 'SMOKEHOUSE', 'GRILL',
        'PINATA','CRACKING', 'SPLINTER','OVEN','BURN','SWORDS','SHIP'],
        GARBAGE: ['RECYCLE', 'RECYCLING', 'TRASH', 'WASTE', 'LANDFILL', 'RUBBISH', 'SEWAGE', 'COMPOST', 'DEBRIS', 'JUNK', 'DUMP', 'DISPOSE',
        'DISPOSAL', 'BIN', 'PILES', 'BAGS', 'BAG', 'CAN', 'CANS', 'CURBSIDE', 'SANITATION', 'SMELL', 'FILTH', 'CLEAN', 'CRAP', 'JANITOR',
        'TRUCK', 'STINK', 'THROW', 'TOSS','POLLUTION', 'RUBBISH', 'CONJECTURE', 'MESS', 'CLUTTER', 'LEFTOVER', 'SCRAP'],
        RESPONSE: ['REACTION', 'ANSWER', 'REPLY', 'FEEDBACK', 'RETORT', 'STATEMENT', 'COMEBACK', 'COUNTER', 'RESULT', 'REBUTTAL', 'COMMENT',
        'QUESTION', 'POST', 'BEHAVIOR', 'ACTION', 'PROVOKE', 'APOLOGY', 'OPINION', 'ALERT', 'EXCUSE', 'INTERACTION', 'EMAIL', 'MESSAGE',
        'SPEECH', 'CLEAR', 'NEGATIVE', 'POSITIVE', 'REFLEX', 'ASSERTION', 'POSTULATE', 'IMPACT', 'REVIEW', 'COMMENTARY'],
        IMAGINATION: ['CREATIVITY', 'CREATIVE', 'MIND', 'VISION', 'IMAGERY', 'FANTASY', 'INSPIRATION', 'CHILD', 'CHILDREN', 'DREAM',
        'CURIOSITY', 'THOUGHTS', 'THOUGHT', 'THINK', 'THINKING', 'PASSION', 'SKILL', 'BRAIN', 'HEAD', 'IDEA', 'REALITY', 'VISIONARY',
        'INSTINCT', 'STORY', 'FICTION', 'MAGIC', 'CONCEPTION', 'SPECULATION', 'CONCEPT', 'IDEATION', 'INNOVATION', 'CREATION', 'DAYDREAM',
        'FUSION', 'EPICUREAN','GALAXY','LIMERENCE'],
        MARRIAGE: ['WEDDING', 'DIVORCE', 'FAMILY', 'SPOUSE', 'UNION', 'CIVIL', 'DATING', 'PARTNER', 'PARTNERSHIP', 'COMMITMENT', 'COUPLE',
        'CEREMONY', 'ENGAGEMENT', 'PROPOSAL', 'ARRANGED', 'CONTRACT', 'HAPPY', 'BROKEN', 'KISS', 'RING', 'LEGAL', 'ANNULMENT', 'INTIMATE',
        'INTIMACY', 'BOND', 'CHILDREN','BEACH', 'JOURNEY', 'ORGANIZATION', 'FUSION', 'RECEPTION', 'BANQUET','SUIT','DRESS','CHEATING','POLYGAMY'],
        EXCITEMENT: ['JOY', 'HYPE', 'ANXIETY', 'THRILL', 'ANTICIPATION', 'EUPHORIA', 'PASSION', 'FRENZY', 'HAPPY', 'HAPPINESS', 'INTEREST',
        'FEELING', 'FEEL', 'FUN', 'DELIGHT', 'DRAMA', 'ADRENALINE', 'SURPRISE', 'DANGER', 'PLEASURE', 'EMOTION', 'SMILE', 'REACTION',
        'DISCOVERY', 'BREAKTHROUGH', 'EPIPHANY', 'INNOVATION', 'VICTORY','DOPAMINE', 'ACHIEVEMENT', 'SUCCESS', 'FEAST', 'FESTIVAL', 'GALA'],
        RESOURCE: ['SUPPORT', 'TIME','WATER', 'NATURAL', 'HUMAN', 'SUSTAIN', 'SUSTAINABILITY', 'FUNDS', 'FUND', 'FUNDING', 'OIL', 'POWER', 'ENERGY',
        'COMMODITY', 'MINERALS', 'ASSET', 'ASSETS', 'PROVIDE', 'VALUABLE', 'VITAL', 'ALLOCATE', 'ALLOCATION', 'APPROACH', 'FRAMEWORK', 'TOOL',
        'UTILIZATION', 'CAPABILITY', 'INGREDIENTS', 'HARVEST', 'DEPOT','ABUNDANT'],
        PUPIL: ['IRIS', 'TEACHER', 'STUDENT', 'EYE', 'SCHOOL', 'STUDENTS', 'EDUCATION', 'CLASS', 'MENTOR', 'LEARN', 'SEE', 'VISION', 'EYES',
        'OPTICS', 'OPTICAL', 'DILATE', 'DILATION', 'UNIFORM', 'OPHTHALMOLOGY', 'IRIDOLOGY', 'LEARNING', 'CLASSROOM', 'MASTERY', 'PROGRESSION',
        'INSIGHT', 'ASSIGNMENT', 'LUNCHBOX', 'SOUS', 'HOMEROOM','DILATION','SOLDIER','KNIGHTS'],
        WEATHER: ['CLIMATE', 'SNOW', 'WIND', 'RAIN', 'STORM', 'SUN', 'WINTER', 'FALL', 'ATMOSPHERE', 'COLD', 'HOT', 'AIR', 'TEMPERATURE',
        'BAD', 'NEWS', 'FORECAST','POLLUTION', 'PROOF','TSUNAMI', 'NATURE', 'NATURAL', 'SPRING', 'SUMMER', 'PERSON', 'VISIBILITY', 'TRAVEL', 'SKY', 'METEOROLOGY',
        'PATTERN', 'SEASON', 'THERMOSTAT', 'FARM', 'BARBECUE', 'PICNIC', 'PATIO', 'CRISIS','HURRICANE'],
        DRAGON: ['WIND','ORDER', 'FIRE','BURN', 'LIZARD', 'FLY', 'FLIGHT', 'WINGS','THRONE', 'BEAST', 'CREATURE', 'LEGEND', 'MAGIC', 'MAGICAL', 'KNIGHTS', 'KINGS',
        'DUNGEON', 'MYTHICAL', 'BIG', 'SCALES', 'TAIL', 'EGG', 'SKY', 'TREASURE', 'LARGE', 'LORD', 'MYTHOLOGY', 'FANTASY', 'FOLKLORE', 'DEATH',
        'ADVENTURE','MYTH', 'QUEST', 'SCROLL','SMOKE','SWORDS', 'HOARD','LOCHNESS', 'FEAST', 'ROAST', 'LANDING', 'LAND','TALES','TAILS','GREEN'],
        OCEAN: ['BIG','POLLUTION', 'SEA', 'VAST', 'WATER', 'BEACH','LOCHNESS', 'SHORE', 'SALT', 'WAVES', 'BLUE', 'CREATURES', 'WHALE', 'FISH', 'MERMAID', 'CURRENTS',
        'BOAT', 'SHIP', 'TRAVEL', 'FLOOR', 'EYES', 'WORLD', 'LARGE', 'FEAR', 'SHARK', 'MOON', 'CURRENT', 'DEPTH', 'WAVE', 'TIDE', 'VOYAGE',
        'MARITIME','BATTLESHIP', 'NAVIGATION','CANNONS','MARINE', 'WRECKS', 'HORIZON', 'EXPLORATION', 'NAUTICAL', 'LITTER', 'DISCOVERY', 'SEAFOOD', 'SHIPMENT', 'PORT','CRUISE','YACHT',
        'TSUNAMI','HURRICANE','BEACH','POLLUTION','TREASURE'],
        WAR: ['WOUNDS', 'WOUND','HUMAN', 'MILITARY', 'FIGHT', 'COMBAT', 'BATTLE', 'CONFLICT', 'STRUGGLE', 'PEACE', 'INVASION', 'WEAPON', 'DEATH', 'CRISIS',
        'CAMPAIGN', 'CIVIL', 'WORLD', 'STRATEGY', 'ZONE', 'NUCLEAR', 'COLD', 'MACHINE', 'VIOLENCE', 'WIN', 'LOSE', 'DECLARE', 'ANTI', 'ARMY',
        'SOLDIER', 'LORD', 'AFTERMATH', 'DESTRUCTION', 'PRISONER', 'ART', 'TACTICS', 'TACTIC', 'DOCTRINE', 'VICTORY', 'DEFEAT', 'BLUEPRINT',
        'RATION', 'MESS', 'FRONTLINE', 'DEPLOYMENT', 'SWORDS','SHIP','INVASION','GATHERING','FUNDING','MARINE','FAIR','BATTLESHIP','CANNONS','KNIGHTS','THRONE']
     
}



// console.log(wordPool)

/*---------------------------- Variables (state) ----------------------------*/
let winningWords =[]
let assassinWords =[]
let bystanderWords =[]
let winningClueWords =[]
let bystanderClueWords =[]
let assassinClueWords =[]
let wordsUsedGame =[]
let allBystanderClues =[]
let allWinningClues =[]
let clues = []
 let count = {}
let pickedCard
let wordsLeft
let rounds
let wordLink
let endRound
let gameOver


/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const clueEl = document.querySelector("#tLClues")
const messageEl = document.querySelector("#message")
const messageEl2 = document.querySelector("#message2")
const playAgainBtn = document.getElementById("reset")




/*-------------------------------- Functions --------------------------------*/



function init() {
    cardEls.textContent = ''
    gameOver = false
    rounds = 0
    wordsLeft = 8
    endRound = false
   
    // render()
}


pullWords(wordPool)
assignWords()
groupAll()
cardDisplay()
cluesDisplayed()


function gameCheck() {
    if (wordsLeft < 1 || Rounds > 4) {
        gameOver = true
    } else {}
}



// function render() {
//     updateBoard()
   
// }


// function updateBoard() {
//     cardEls.forEach((card, idx) => {
//         cardEls[idx].textContent = wordsUsedGame[idx]
//         cardEls[idx].addEventListener('click',getPickedCard)
//     });
// }


function pullWords(wordPool) {
    const wordsUsed = Object.keys(wordPool)
    for (i = 0; wordsUsedGame.length < 16; i++ ) {
    let randomIndex = Math.floor(Math.random() * wordsUsed.length)
        if (!wordsUsedGame.includes(wordsUsed[randomIndex])) {
            wordsUsedGame.push(wordsUsed[randomIndex])
        }
    }
}



function assignWords() {
    for ( i = 0; winningWords.length + bystanderWords.length + assassinWords.length < 16; i++) {
    let randomIndex = Math.floor(Math.random() * wordsUsedGame.length)
        if ((!winningWords.includes(wordsUsedGame[randomIndex])) && winningWords.length < 8) {
            winningWords.push(wordsUsedGame[randomIndex])
        } else if ((!bystanderWords.includes(wordsUsedGame[randomIndex])) && (!winningWords.includes(wordsUsedGame[randomIndex])) && bystanderWords.length < 7) {
                bystanderWords.push(wordsUsedGame[randomIndex])} 
                else if ((!bystanderWords.includes(wordsUsedGame[randomIndex])) && (!winningWords.includes(wordsUsedGame[randomIndex])))
        {
             assassinWords.push(wordsUsedGame[randomIndex])
        }
    }
}



 function groupWClueWords() {
    winningWords.forEach((winningWord) => {
        if (Object.keys(wordPool).includes(winningWord)) {
            winningClueWords.push(wordPool[winningWord])
            
        }
    }) 
    allWinningClues = winningClueWords.flat()
}  
function groupBClueWords() {
    bystanderWords.forEach((bystanderWord) => {
        if (Object.keys(wordPool).includes(bystanderWord)) {
              bystanderClueWords.push(wordPool[bystanderWord])
        }
    })
     allBystanderClues = bystanderClueWords.flat()
}
function groupAClueWords() {
    assassinWords.forEach((assassinWord) => {
        if (Object.keys(wordPool).includes(assassinWord)) {
               assassinClueWords.push(wordPool[assassinWord])
        }
    })
}

function groupAll() {
    groupWClueWords()
    groupBClueWords()
    groupAClueWords()
}


function cluesDisplayed() {
    for (i = 0; i < allWinningClues.length; i++) {
        let randomIndex = Math.floor(Math.random() * allWinningClues.length)
        if (!assassinClueWords.includes(allWinningClues[randomIndex]) && !allBystanderClues.includes(allWinningClues[randomIndex])) {
             clues.push(allWinningClues[randomIndex])
        
        }
    }
        clues.forEach((word) => {
            if (count[word]) {
                count[word] += 1
            } else {
                count[word] = 1
            }
        })
    let randomIndex = Math.floor(Math.random() * clues.length)
        if (Object.keys(count).includes(clues[randomIndex])) {
           messageEl.textContent = `Clue: ${clues[randomIndex]}`
        messageEl2.textContent =  `Words to be Guessed: ${count[clues[randomIndex]]}`
         }
         wordLink = count[clues[randomIndex]]
         console.log(count[clues[randomIndex]]);
        clues = []
        count = {}
}


console.log(allWinningClues);
 console.log(winningWords);
 console.log(assassinWords);

function pickResult(event) {
     pickedCard = parseInt(event.target.id)
        pickedCardResult()
        unclickable()
        nextTurn()
       
    }


function unclickable() {
    if (!cardEls.backgroundColor === "white") {
        return
    }
}

function nextTurn() {
    if (endRound) {
        cluesDisplayed()
        endRound = false
        return
    } else {}
}

function pickedCardResult() {
    if (assassinWords.includes(wordsUsedGame[pickedCard])) {
        clueEl.textContent = `Unfortunately ${wordsUsedGame[pickedCard]} is the Assassin Card`
        cardEls[pickedCard].style.backgroundColor = "#2B2D42";
        cardEls[pickedCard].textContent = "Game Over!"
        cardEls[pickedCard].style.color = "white";
        gameOver = true
        return
       } else if (bystanderWords.includes((wordsUsedGame[pickedCard]))) {
        clueEl.textContent = `Ooh! ${wordsUsedGame[pickedCard]} is a Bystander Card. Round Over!`
        cardEls[pickedCard].style.backgroundColor = "#F24236";
        cardEls[pickedCard].style.color = "white";
        rounds = rounds + 1
        endRound = true
        return
       } else if (winningWords.includes((wordsUsedGame[pickedCard]))) {
        clueEl.textContent = `${wordsUsedGame[pickedCard]} is right! Great Job!`
        cardEls[pickedCard].style.backgroundColor = "#71B340";
        cardEls[pickedCard].style.color = "white";
          wordsLeft = wordsLeft - 1
          wordLink = wordLink - 1
          if (wordLink = 0){
            clueEl.textContent = "Great Job! That's it for this Clue"
            rounds = rounds + 1

            return
          }
       }
}

function cardDisplay() {
    cardEls.forEach((card, idx) => {
        cardEls[idx].textContent = wordsUsedGame[idx]
        cardEls[idx].addEventListener('click',pickResult)
    })
}


/*----------------------------- Event Listeners -----------------------------*/
playAgainBtn.addEventListener('click', pullWords(wordPool))
