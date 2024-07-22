
/*-------------------------------- Constants --------------------------------*/
const wordPool = {
    theory: ['approach', 'argument', 'assumption', 'concept', 'idea', 'ideology', 'workspace', 'study', 'research', 
    'method','philosophy','plan','position','premise','proposal','rationale', 'speculation', 'academic', 'expectation', 
    'suspicion', 'system', 'thesis', 'understanding', 'basis', 'feeling', 'guess', 'hunch', 'recipe', 'cuisine', 'menu',
    'outlook', 'presumption', 'surmise','hypothesis', 'suggestion', 'generalization', 'inkling', 'forecast', 'anticipation',
    'speaker', 'nature', 'Darwin', 'science', 'rumor', 'question','conspiracy', 'evolution', 'model', 'experiment', 'prediction', 'result', 
    'consequence', 'conclusion', 'manifestation', 'age', 'milestone', 'cycle', 'occasion', 'limitation', 'susceptibility',
    'exchange', 'value', 'economy', 'rate', 'density', 'capacity', 'magnitude', 'intensity', 'earnings', 'revenue', 'profit', 'yield',
    'link', 'association', 'correlation', 'framework', 'model', 'depiction', 'devotion', 'passion', 'feeling', 'communication',
    'message', 'messaging', 'platform', 'implication', 'ramification', 'effect', 'toppings','slice', 'health', 'habits', 'addiction',
    'erosion', 'fertility', 'pedagogy', 'instruction', 'education', 'guidance', 'interconneciton', 'interdependence', 'brewing',
    'fermentation', 'craft', 'epistemology', 'cognition', 'insight', 'optimization', 'enhancement', 'develepment', 'refinement', 'solution',
    'settlement', 'remuneration', 'exchange', 'transaction', 'consumer', 'patron', 'client', 'philanthropy', 'altruism', 'benefaction',
    'risk', 'challenge', 'enterprise', 'venture', 'leadership', 'innovation', 'merit', 'reward', 'incentive', 'authorization', 'sanction',
    'clearance', 'consent', 'analysis', 'evaluation', 'critique', 'assessment', 'specification', 'criterion', 'stipulation', 'tool', 
    'psychology', 'traits', 'disposition', 'blend', 'timber', 'axiom', 'rubbish', 'conjecture', 'postulate', 'assertion', 'speculation', 
    'ideation', 'union', 'partnership', 'bond', 'discovery', 'innovation', 'breakthrough', 'epiphany', 'ophthalmology', 'iridology', 'classroom',
    'learning', 'education', 'meteorology', 'forecast', 'atmosphere', 'mythology', 'fantasy', 'depth', 'current', 'wave', 'strategy', 
    'tactics', 'doctrine'],
     outcome: ['event', 'fallout', 'issue',  'result', 'consequence', 'conclusion', 'manifestation',
    'reaction', 'aftereffect', 'aftermath', 'end', 'payback', 'score', 'cause', 'win','effect','justify','reason','finish',
     'decision', 'situation', 'scenario', 'experience', 'fate', 'future', 'reward', 'victorious', 'path', 'game',
      'lose', 'verdict', 'model', 'experiment', 'prediction'],
    desk: ['counter', 'standing', 'secretary', 'work', 'workspace', 'davenport', 'school', 'writing', 'wooden', 'hold', 
    'office', 'chair', 'homework','table', 'room', 'workstation', 'receptionist', 'reception', 'study', 'research', 'academic',
    'tech', 'gaming', 'station'], 
    meal: ['snack', 'breakfast', 'lunch', 'dinner', 'food', 'knife', 'fork', 'spoon', 'cuisine',
    'menu', 'dish', 'feast', 'entree', 'steak', 'eat', 'picnic', 'restaurant','nutrient',
    'recipe', 'service', 'dishes', 'kitchen', 'event', 'delivery', 'sleep', 'takeout', 'free',
    'money', 'thanksgiving', 'health', 'buffett', 'course', 'dollar', 'money', 'ingest', 'consume', 'cafe'],
    arrival: ['departure', 'return', 'appearance', 'landing', 'visit', 'annoucement', 'trip', 'forecast', 'anticipation', 
    'homecoming', 'incoming', 'income', 'entrance', 'welcome', 'presence', 'impending', 'birth', 'prediciton', 'expectation',
    'visitor', 'late', 'shipping', 'delivery', 'creation', 'travel', 'travelling', 'holiday', 'flight'],
    birthday: ['celebration', 'cake', 'gift', 'party', 'celebrate', 'special', 'happy', 'dinner', 'cycle',
    'candle', 'festivities', 'group', 'age', 'yearly', 'year', 'suit', 'month', 'milestone', 'annually',
    'present', 'card', 'balloons', 'balloon', 'trip', 'friends', 'friend', 'hat', 'occasion'],
    weakness: ['strength', 'feeble', 'frail', 'vulnerable', 'slow', 'strong', 'imperfect', 'lower',
    'flimsy', 'dilute', 'fear', 'resist', 'damage', 'ineffective', 'exhaustion', 'muscle', 'limit',
    'limits', 'limitation', 'detriment', 'decline', 'susceptibility', 'vulnerability'],
    currency: ['money', 'coin', 'dollar', 'cash', 'bank', 'debt', 'country', 'credit', 'asset', 
    'store', 'liquid', 'paper', 'resource', 'gold', 'silver', 'exchange', 'finance', 'crypto', 'devaluation',
    'digital', 'power', 'shop', 'buy', 'sell', 'foreign', 'fees', 'transaction', 'rates', 'platform', 'economy',
    'debit', 'interest', 'product', 'products', 'wallet', 'purse', 'amount', 'count', 'value', 'devalue', 'valuation', 'rate'],
    volume: ['mass', 'quantity', 'amount','weight', 'length', 'bulk', 'measure', 'gallon', 'density', 'capacity', 'magnitude', 
    'production', 'book', 'size', 'paperback', 'area', 'mute', 'music', 'sound', 'raise', 'lower', 'intensity', 
     'level', 'distance', 'audio', 'speaker', 'dimensions', 'shares','business', 'finance'],
    income: ['wealth', 'profit', 'revenue', 'salary', 'hourly', 'hustle', 'money', 'tax', 'wage', 'earnings', 'yield',
    'benefits', 'debt', 'cash', 'debit', 'save', 'savings', 'account', 'employmeny', 'job', 'work',
    'expenses', 'expense', 'asset', 'value', 'raise', 'purchase', 'buy', 'cycle', 'check','business', 'finance'], 
    science: ['method', 'biology', 'chemistry', 'physics', 'math', 'technology', 'observation', 'hypothesis',
    'analytics', 'experiment', 'nature', 'human', 'data', 'predict', 'progress', 'health', 
    'institute', 'school', 'evidence', 'life', 'degree', 'test', 'evolution', 'grade', 'museum', 'measure',
    'study', 'formula', 'fiction', 'concept', 'teacher', 'instructor', 'hormone', 'subject', 'anatomy', 'psychology'], 
    connection: ['bond','link', 'attachment', 'contact', 'junction', 'association', 'relate', 
    'relevance', 'concatenation', 'communication', 'hookup', 'friend', 'friendship', 'affiliation',
    'intimacy', 'together', 'history', 'correlation', 'internet', 'spark', 'ping', 'sync', 'conversation',
    'feeling', 'interaction', 'parallels', 'signal', 'service', 'port', 'network', 'close', 'performance', 
    'bad', 'good', 'bridge', 'involved', 'fasten', 'join'],
    description: ['definition', 'title', 'characterization', 'explanation', 'explain', 'name', 'details',
    'text', 'picture', 'statement', 'summary', 'attributes', 'comment', 'story', 'match', 'matching', 'matches',
    'adjective', 'idea', 'suspect', 'about', 'transcript', 'parapgraph', 'type', 'write', 'intro', 'page', 
    'review', 'visual', 'visualize', 'quote', 'language', 'model', 'framework', 'concept', 'depiction'],
    love: ['bond', 'intimacy', 'adore', 'romance', 'passion', 'emotion', 'heart', 'kiss', 'cupid', 'affection', 'devotion', 
    'valentines', 'obsession', 'together', 'bird', 'rose', 'feeling', 'dream', 'song', 'sex', 'god', 
    'interest', 'marry', 'hormone', 'gift', 'language', 'fear', 'people', 'partner', 'self', 'flirty', 'fall'],
    media: ['news', 'internet', 'radio', 'network', 'video', 'social', 'sound', 'entertainment', 'computer',
    'public', 'people', 'digital', 'online', 'clips', 'footage', 'culture', 'picture', 'music', 'politics',
    'audience', 'web', 'influencer', 'viewer', 'event', 'communication', 'message', 'messaging', 'coverage', 'platform'],
    consequence: ['result', 'effect', 'ramification', 'implication', 'impact', 'choice', 'punishment', 'aftermath', 'cause', 'action', 
    'repercussion', 'byproduct', 'risk', 'issue', 'cost', 'discipline', 'event', 'penalty', 'problem', 'danger', 
    'backlash', 'stress', 'fear', 'damage', 'regret', 'suffer', 'fail', 'failure'],
    pizza: ['cheese', 'food', 'italy', 'pepperoni', 'tomato', 'bread', 'sauce', 'restaurant', 'oven', 'leftover', 
    'slice', 'pie', 'dinner', 'lunch', 'frozen', 'pineapple', 'italian', 'kitchen', 'freezer', 'microwave', 'ingest',
    'consume', 'recipe', 'crust', 'topping', 'toppings', 'aroma'],
    cigarette: ['cigar', 'tobacco', 'nicotine', 'smoke', 'smoking', 'lungs', 'cancer', 'vape', 'butt', 'smoker',
    'inhale', 'gum', 'pack', 'drug', 'puff', 'lighter', 'light', 'fire', 'marlboro', 'taxes', 'expensive', 'menthol',
    'hit', 'smell', 'flavor', 'blunt', 'leaf', 'addictive', 'addicting', 'addict', 'product', 'import', 'ban', 'bans',
    'cancerous', 'abuse', 'habit', 'habits', 'health', 'addiction'],
    blood: ['heart', 'oxygen', 'hemoglobin', 'gore', 'horror', 'stream', 'plasma', 'inflection', 'organ', 'organs', 
    'liver', 'vein', 'kidney', 'brain', 'cells', 'cell', 'knife', 'human', 'vessel', 'platelet', 'fluid', 'lung',
    'stomach', 'red', 'iron', 'fluids', 'clot', 'pulse', 'transfusion', 'menstruation', 'type', 'test', 'ancestry', 
    'ancestor', 'nutrients', 'nutrient', 'circulation', 'circulate', 'injury', 'injuries', 'labs','lab', 'vampire',
    'sacrifice', 'moon', 'orange', 'murder', 'stab','donate', 'doantion', 'donations', 'donor', 'wound', 'vital', 'coagulation'],
    dirt: ['stain', 'stains', 'mud', 'filth', 'clay', 'soil', 'grime', 'scandal', 'earth', 'ground', 'dust', 'muck', 'erosion',
    'muddy', 'debris', 'grass', 'pants', 'shoes', 'clothes', 'crap', 'ditches', 'ditch', 'gossip', 'trash', 'contamination', 'planting',
    'contaminate', 'garbage', 'rocks', 'rock', 'manure', 'plants', 'plant', 'trees', 'tree', 'barefoot', 'street', 'germs', 'growing',
    'bugs', 'insects', 'bug', 'insect', 'moisture', 'grow', 'face', 'unclean', 'sediment', 'road', 'forest', 'pot', 'fertility'],
    trainer: ['waist', 'physical', 'coach', 'manager', 'instructor', 'condition', 'horse', 'breeder', 'box', 'boxer', 'teacher',
    'gym', 'pokemon', 'sneaker', 'fitness', 'improvement', 'improve', 'pet', 'dog', 'cat', 'workout', 'partner', 'strength',
    'stamina', 'bodybuilder', 'expert', 'program', 'person', 'exercise', 'mentor', 'teammate', 'educate', 'educator', 'sports',
    'sport', 'rookie', 'beginner', 'teach', 'learn', 'mastery', 'pedagogy', 'instruction', 'education', 'guide', 'guidance'],
    relationship: ['friendship', 'dating', 'date', 'partner', 'marriage', 'partnership', 'ties', 'affair', 'assocation', 'state',
    'family', 'brother', 'sister', 'friends', 'friend', 'feelings', 'significant', 'future', 'boundaries', 'sex', 'emotion', 'emotional',
    'breakup', 'loss', 'trust', 'rift', 'break', 'couple', 'history', 'child', 'parent', 'dynamic', 'tied', 'pair', 'drama', 'close', 'adult',
    'association', 'interdependence', 'interconnection' ],
    beer: ['wine', 'drinks', 'drink', 'beverage', 'wheat', 'brew', 'suds', 'brewery', 'pubs', 'pub', 'pint', 'liver', 'glass', 'bottle',
    'micro', 'drunk', 'piss', 'party', 'drug', 'abuse', 'oktoberfest', 'adult', 'money', 'bar', 'ingest', 'sip', 'bartender', 'consume',
    'brewing', 'fermentation', 'craft', 'tasting', 'blend', 'aroma'],
    knowledge: ['information', 'skills', 'expertise', 'expert', 'learn', 'learning', 'aware', 'awareness', 'process', 'power', 'wisdom',
    'insight', 'mind', 'think', 'understand', 'subject', 'memory', 'possess', 'background', 'perspective', 'data', 'head', 'curiosity', 
    'curious', 'books', 'study', 'school', 'concept', 'concepts', 'intellect', 'smart', 'mastery', 'application', 'apply', 'cognition',
    'understanding', 'epistemology'],
    improvement: ['better', 'change', 'develop', 'development', 'upgrade', 'renovation', 'renovate', 'progress', 'adjust', 'reform',
    'repair', 'growth', 'grow', 'different', 'difference', 'increase', 'self', 'help', 'fix', 'work', 'practice', 'boost', 'innovation',
    'feedback', 'benefit', 'health', 'time', 'house', 'restoration', 'restore', 'optimization', 'optimize', 'enhancement', 'enhance', 'refine', 
    'refinement'],
    resolution: ['quality', 'camera', 'photo', 'declaration', 'determined', 'determination', 'decision', 'document', 'proposal', 
    'compromise', 'answer', 'solve', 'purpose', 'graphics', 'performance', 'rate', 'conflict', 'monitor', 'screen', 'closure', 'display', 
    'image', 'color', 'sharp', 'low', 'video', 'poor', 'contrast', 'computer', 'pact', 'debate', 'speech', 'solution', 'settlement', 'conclusion'],
    payment: ['credit', 'debit', 'check', 'cash', 'refund', 'money', 'receipt', 'installment', 'salary', 'fee', 'bonus', 'premium', 'royalty',
    'incentive', 'amount', 'costs', 'cost', 'shipping', 'down', 'bank', 'donation', 'bill', 'charge', 'employer', 'car', 'processing', 
    'receivable', 'sale', 'direct', 'funds', 'tips', 'gratuity', 'overdue', 'tuition', 'missed', 'wallet', 'cards', 'compensation', 'compensate', 
    'exchange', 'remuneration', 'transaction'],
    customer: ['transaction', 'client', 'exchange', 'use', 'retail', 'shop', 'shopper', 'vendor', 'goods', 'food', 'service', 'buyer',
    'hospitality', 'person', 'store', 'order', 'returns', 'associate', 'products', 'consumer', 'patron', 'visitor'],
    charity: ['foundation', 'money', 'donation', 'donations', 'gift', 'marketing', 'donate', 'organization', 'philanthropy', 'fundraiser', 
    'fundraising', 'handout', 'fund', 'funds', 'taxes', 'tax', 'orphans', 'orphan', 'institution', 'help', 'giveaway', 'donor', 'celebrities',
    'offering', 'benefit', 'aid', 'nonprofit', 'service', 'kindness', 'kind', 'care', 'rescue', 'poor', 'event', 'events', 'children', 'child',
    'contribution', 'contributions', 'altruism', 'benefaction', 'generous', 'generosity'],
    failure: ['success', 'loss', 'lose', 'inability', 'flop', 'lack', 'collapse', 'error', 'malfunction', 'problem', 'problems', 'flunk', 
    'defeat', 'miscalculation', 'system', 'bad', 'learn', 'shame', 'result', 'pain', 'bugs', 'glitch', 'crash', 'avoid', 'threat', 'doubt', 
    'unsuccessful', 'blunder', 'blooper', 'unfortunate', 'disappoint', 'disappointed', 'wrong', 'risk', 'challenge', 'experiment', 'hypothesis'],
    initiative: ['project', 'effort', 'program', 'combat', 'petition', 'first', 'plan', 'steps', 'action', 'leadership', 'strategy', 'policy', 
    'pledge', 'momentum', 'create', 'fight', 'energy', 'idea', 'campaign', 'education', 'vision', 'measure', 'begin', 'fund', 'blueprint', 
    'promises', 'promise', 'develop', 'enterprise', 'innovation', 'venture'],
    bonus: ['incentive', 'salary', 'reward', 'premium', 'raise', 'extra', 'commission', 'package', 'winnings', 'win', 'signing', 'package', 
    'prize', 'prizes', 'cost', 'gift', 'benefit', 'wage', 'boost', 'award', 'offer', 'office', 'paid', 'money', 'compensate', 'promotion', 
    'promotional', 'yearly', 'annual', 'earn', 'merit', 'compensation'],
    permission: ['consent', 'approval', 'license', 'authorize', 'authorization', 'pass', 'clearance', 'clear', 'grant', 'sanction', 'written',
    'allow', 'explicit', 'slip', 'waiver', 'preapproved', 'approve', 'seek', 'obtain'],
    judgment: ['opinion', 'validation', 'decision', 'verdict', 'justice', 'court', 'jury', 'law', 'ruling', 'gossip', 'estimate', 'estimation',
    'mind', 'final', 'sound', 'guilty', 'innocent', 'critique', 'feel', 'fear', 'intuition', 'guilt', 'moral', 'characterization', 'correct', 
    'sentence', 'assessment', 'evaluation', 'analysis'],
    requirement: ['necessity', 'ratio', 'necessary', 'prerequisite', 'need', 'essential', 'must', 'obligation', 'mandatory', 'responsibility',
    'demand', 'guideline', 'guidelines', 'minimum', 'limit', 'limitation', 'mandate', 'standard', 'standards', 'rules', 'threshold', 'clause', 
    'qualification', 'qualifications', 'condition', 'measure', 'fulfill', 'criteria', 'stipulation', 'needs', 'job', 'basic', 'specification', 
    'criterion'],
    chest: ['heart', 'neck', 'torso', 'back', 'lungs', 'lung', 'breast', 'body', 'box', 'treasure', 'cavity', 'trunk', 'compartment', 
    'loot', 'pirate', 'key', 'skin', 'anatomy', 'wound', 'beat', 'muscle', 'grow', 'pectoral', 'toy', 'tool', 'vault', 'container'],
    personality: ['character', 'identity', 'attitude', 'trait', 'ego', 'individual', 'charisma', 'charm', 'self', 'demeanor', 'humor',
    'temperament', 'qualities', 'emotion', 'emotional', 'extrovert', 'introvert', 'extroverted', 'introverted', 'attribute', 'kind', 
    'mean', 'behavior', 'brain', 'celebrity', 'quirky', 'flirty', 'psychology', 'disposition', 'traits'],
    coffee: ['drinks', 'drink', 'beverage', 'caffeine', 'espresso', 'bean', 'iced', 'brew', 'cafe', 'consume', 'ingest', 'energy', 'sip', 
    'mug', 'decaf', 'cup', 'roast', 'shop', 'grow', 'breakfast', 'hot', 'cold', 'work', 'office', 'donuts', 'pot', 'table', 'morning', 
    'black', 'blend', 'aroma'],
    wood: ['table', 'cabin', 'oak', 'lumber', 'maple', 'tree', 'bamboo', 'hard', 'material', 'furniture', 'logs', 'soil', 'twigs', 'cutting',
    'ply', 'trunk', 'pieces', 'sturdy', 'thick', 'house', 'floor', 'paper', 'trees', 'fire', 'camp', 'camping', 'forest', 'cherry', 'chips', 
    'termite', 'stove', 'stoves', 'splinter', 'timber', ],
    garbage: ['recycle', 'recycling', 'trash', 'waste', 'landfill', 'rubbish', 'sewage', 'compost', 'debris', 'junk', 'dump', 'dispose', 
    'disposal', 'bin', 'piles', 'bags', 'bag', 'can', 'cans', 'curbside', 'sanitation', 'smell', 'filth', 'clean', 'crap', 'janitor',
    'truck', 'stink', 'throw', 'toss', 'rubbish', 'conjecture'],
    response: ['reaction', 'answer', 'reply', 'feedback', 'retort', 'statement', 'comeback', 'counter', 'result', 'rebuttal', 'comment',
    'question', 'post', 'behavior', 'action', 'provoke', 'apology', 'opinion', 'alert', 'excuse', 'interaction', 'email', 'message', 
    'speech', 'clear', 'negative', 'positive', 'reflex', 'assertion', 'postulate'],
    imagination: ['creativity', 'creative', 'mind', 'vision', 'imagery', 'fantasy', 'inspiration', 'child', 'children', 'dream', 
    'curiousity', 'thoughts', 'thought', 'think', 'thinking', 'passion', 'skill', 'brain', 'head', 'idea', 'reality', 'visionary', 
    'instinct', 'story', 'fiction', 'magic', 'conception', 'speculation', 'concept', 'ideation'],
    marriage: ['wedding', 'divorce', 'family', 'spouse', 'union', 'civil', 'dating', 'partner', 'partnership', 'commitment', 'couple',
    'ceremony', 'engagement', 'proposal', 'arranged', 'contract', 'happy', 'broken', 'kiss', 'ring', 'legal', 'annulment', 'intimate', 
    'intimacy', 'bond'],
    excitement: ['joy', 'hype', 'anxiety', 'thrill', 'anticipation', 'euphoria', 'passion', 'frenzy', 'happy', 'happiness', 'interest', 
    'feeling', 'feel', 'fun', 'delight', 'drama', 'adrenaline', 'surprise', 'danger', 'pleasure', 'emotion', 'smile', 'reaction', 
    'discovery', 'breakthrough', 'epiphany', 'innovation'],
    resource: ['support', 'time', 'natural', 'human', 'sustain', 'sustainability', 'funds', 'fund', 'funding', 'oil', 'power', 'energy',
    'commodity', 'minerals', 'asset', 'assests', 'provide', 'valuable', 'vital', 'allocate', 'allocation', 'approach', 'framework', 'tool'],
    pupil: ['iris', 'teacher', 'student', 'eye', 'school', 'students', 'education', 'class', 'mentor', 'learn', 'see', 'vision', 'eyes', 
    'optics', 'optical', 'dilate', 'dilation', 'uniform', 'ophthalmology', 'iridology', 'learning', 'classroom'],
    weather: ['climate', 'snow', 'wind', 'rain', 'storm', 'sun', 'winter', 'fall', 'atmosphere', 'cold', 'hot', 'air', 'temperature', 
    'bad', 'news', 'forecast', 'proof', 'nature', 'natural', 'spring', 'summer', 'person', 'visibility', 'travel', 'sky', 'meteorology'],
    dragon: ['wind', 'fire', 'lizard', 'fly', 'flight', 'wings', 'beast', 'creature', 'legend', 'magic', 'magical', 'knights', 'kings', 
    'dungeon', 'mythical', 'big', 'scales', 'tail', 'egg', 'sky', 'treasure', 'large', 'lord', 'mythology', 'fantasy', 'folklore'],
    ocean: ['big', 'sea', 'vast', 'water', 'beach', 'shore', 'salt', 'waves', 'blue', 'creatures', 'whale', 'fish', 'mermaid', 'currents', 
    'boat', 'ship', 'travel', 'floor', 'eyes', 'world', 'large', 'fear', 'shark', 'moon', 'current', 'depth', 'wave', 'tide'],
    war: ['wounds', 'wound', 'military', 'fight', 'combat', 'battle', 'conflict', 'struggle', 'peace', 'invasion', 'weapon', 'death', 'crisis', 
    'campaign', 'civil', 'world', 'strategy', 'zone', 'nuclear', 'cold', 'machine', 'violence', 'win', 'lose', 'declare', 'anti', 'army', 
    'soldier', 'lord', 'aftermath', 'destruction', 'prisoner', 'art', 'tactics', 'tactic', 'doctrine']
}



// console.log(wordPool)

/*---------------------------- Variables (state) ----------------------------*/
let winningWords =[]
let assassinWords = []
let bystanderWords = []
let winningClueWords = []
let bystanderClueWords = []
let assassinClueWords = []
let wordsUsedGame = []
let board



/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const messageEl = document.querySelector("#message")
const playAgainBtn = document.getElementById("reset")
const helpSpyBtn = document.getElementById("help")
const countdownEl = document.getElementById("countdown")



/*-------------------------------- Functions --------------------------------*/

//const pullWords = () => {
    let wordsUsed = Object.keys(wordPool)
    for (i = 0; wordsUsedGame.length < 16; i++ ) {
    let randomIndex = Math.floor(Math.random() * wordsUsed.length)
        if (!wordsUsedGame.includes(wordsUsed[randomIndex])) {
            wordsUsedGame.push(wordsUsed[randomIndex])
        } else {}
      //  console.log(wordsUsed[randomIndex])
       // console.log(wordsUsedGame);
    
    }


// const assignWords = (wordsUsedGame) => {
    for ( i = 0; winningWords.length + bystanderWords.length + assassinWords.length < 16; i++) {
    let randomGameIndex = Math.floor(Math.random() * wordsUsedGame.length)
        if ((!winningWords.includes(wordsUsedGame[randomGameIndex])) && winningWords.length < 8) {
            winningWords.push(wordsUsedGame[randomGameIndex])
        } else if ((!bystanderWords.includes(wordsUsedGame[randomGameIndex])) && (!winningWords.includes(wordsUsedGame[randomGameIndex])) && bystanderWords.length < 7) {
                bystanderWords.push(wordsUsedGame[randomGameIndex])} 
                else if ((!bystanderWords.includes(wordsUsedGame[randomGameIndex])) && (!winningWords.includes(wordsUsedGame[randomGameIndex])))
        {
            assassinWords.push(wordsUsedGame[randomGameIndex])
        }
        // console.log(wordsUsedGame[randomGameIndex])
    }
    // console.log(winningWords)
    // console.log(bystanderWords)
    // console.log(assassinWords)

//const groupClueWords = () => {
    // if (wordPool.includes(winningWords)) {
    //     let clueWords = Object.values(wordPool)
    // }

    winningWords.forEach((winningWord) => {
        if (Object.keys(wordPool).includes(winningWord)) {
            winningClueWords.push(Object.values(wordPool[winningWord]))
        }
    })

    bystanderWords.forEach((bystanderWord) => {
        if (Object.keys(wordPool).includes(bystanderWord)) {
            bystanderClueWords.push(Object.values(wordPool[bystanderWord]))
        }
    })

    assassinWords.forEach((assassinWord) => {
        if (Object.keys(wordPool).includes(assassinWord)) {
            assassinClueWords.push(Object.values(wordPool[assassinWord]))
        }
    })

    console.log(assassinClueWords);
    console.log(assassinWords);
    console.log(bystanderClueWords);
    console.log(bystanderWords);
    console.log(winningClueWords);
    console.log(winningWords);
console.log(Object.values(wordPool))
    
//}


    cardEls.forEach((card, idx) => {
        cardEls[idx].textContent = wordsUsedGame[idx]
    });


// let timeLeft = 10

// let timerInterval
// startTimer()

// function startTimer() {
//     timerInterval = setInterval(tick, 1000)
//   }
  
//   function tick() {
//     timeLeft -= 1
//     console.log(timeLeft)
//    // countdownEl.textContent = timeLeft
//     if (timeLeft === 10) {
//         //make help button clickable
//         //when clicked, make time count down 1 second every 3 seconds

//     }
//     if (timeLeft === 0) {
//       messageEl.textContent = "Maybe Next Time"
//       clearInterval(timerInterval)
//     }
//   }

console.log()
const cardAction = () => {}
const help = () => {}
const render = () => {}
const play = () => {}




/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector('#cards').addEventListener('click', cardAction)
// document.querySelector('start').addEventListener('click', play)
// document.querySelector('help').addEventListener('click', help)


