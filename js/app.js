console.log('test');

/*-------------------------------- Constants --------------------------------*/
const wordPool = [{
    theory: ['approach', 'argument', 'assumption', 'concept', 'idea', 'ideology',
    'method','philosophy','plan','position','premise','proposal','rationale', 'speculation', 
    'suspicion', 'system', 'thesis', 'understanding', 'basis', 'feeling', 'guess', 'hunch',
    'outlook', 'presumption', 'surmise','hypothesis', 'suggestion', 'generalization', 'inkling',
    'speaker', 'nature', 'Darwin', 'science', 'rumor', 'question','conspiracy', 'evolution',],
     outcome: ['conclusion', 'event', 'fallout', 'issue',
    'reaction','result', 'aftereffect', 'aftermath', 'end', 'payback', 'score', 'cause',
    'win','consequence','effect','justify','reason','finish', 'decision', 'situation', 'scenario',
    'experience', 'fate', 'future', 'reward', 'victorious', 'path', 'game', 'lose', 'verdict'],
    desk: ['counter', 'standing', 'secretary', 'work', 'workspace', 'davenport', 'school', 'writing', 'wooden', 'hold', 
    'office', 'chair', 'homework','table', 'room', 'workstation', 'receptionist', 'reception',
    'tech', 'gaming', 'station'], 
    meal: ['snack', 'breakfast', 'lunch', 'dinner', 'food', 'knife', 'fork', 'spoon',
    'menu', 'dish', 'feast', 'entree', 'steak', 'eat', 'picnic', 'restaurant','nutrient',
    'recipe', 'service', 'dishes', 'kitchen', 'event', 'delivery', 'sleep', 'takeout', 'free',
    'money', 'thanksgiving', 'health', 'buffett', 'course', 'dollar', 'money', 'ingest', 'consume'],
    arrival: ['departure', 'return', 'appearance', 'landing', 'visit', 'annoucement', 'trip',
    'homecoming', 'incoming', 'income', 'entrance', 'welcome', 'presence', 'impending', 'birth',
    'visitor', 'late', 'shipping', 'delivery', 'creation', 'travel', 'travelling', 'holiday', 'flight'],
    birthday: ['celebration', 'cake', 'gift', 'party', 'celebrate', 'special', 'happy', 'dinner',
    'candle', 'festivities', 'group', 'age', 'yearly', 'year', 'suit', 'month', 'milestone', 'annually',
    'present', 'card', 'balloons', 'balloon', 'trip', 'friends', 'friend', 'hat'],
    weakness: ['strength', 'feeble', 'frail', 'vulnerable', 'slow', 'strong', 'imperfect', 'lower',
    'flimsy', 'dilute', 'fear', 'resist', 'damage', 'ineffective', 'exhaustion', 'muscle', 'limit',
    'limits', 'limitation', 'detriment', 'decline'],
    currency: ['money', 'coin', 'dollar', 'cash', 'bank', 'debt', 'country', 'credit', 'asset', 
    'store', 'liquid', 'paper', 'resource', 'gold', 'silver', 'exchange', 'finance', 'crypto', 'devaluation',
    'digital', 'power', 'shop', 'buy', 'sell', 'foreign', 'fees', 'transaction', 'rates', 'platform', 
    'debit', 'interest', 'product', 'products', 'wallet', 'purse', 'amount', 'count'],
    volume: ['mass', 'quantity', 'amount','weight', 'length', 'bulk', 'measure', 'gallon', 'density',
    'production', 'book', 'size', 'paperback', 'area', 'mute', 'music', 'sound', 'raise', 'lower', 
     'level', 'distance', 'audio', 'speaker', 'dimensions', 'shares','business', 'finance'],
    income: ['wealth', 'profit', 'revenue', 'salary', 'hourly', 'hustle', 'money', 'tax', 'wage',
    'benefits', 'debt', 'cash', 'debit', 'save', 'savings', 'account', 'employmeny', 'job', 'work',
    'expenses', 'expense', 'asset', 'value', 'raise', 'purchase', 'buy', 'cycle', 'check','business', 'finance'], 
    science: ['method', 'biology', 'chemistry', 'physics', 'math', 'technology', 'observation', 'hypothesis',
    'analytics', 'experiment', 'nature', 'human', 'data', 'predict', 'progress', 'health', 
    'institute', 'school', 'evidence', 'life', 'degree', 'test', 'evolution', 'grade', 'museum', 'measure',
    'study', 'formula', 'fiction', 'concept', 'teacher', 'instructor', 'hormone', 'subject'], 
    connection: ['bond', 'relationship','link', 'attachment', 'contact', 'junction', 'association', 'relate', 
    'relevance', 'concatenation', 'communication', 'hookup', 'friend', 'friendship', 'affiliation',
    'intimacy', 'together', 'history', 'correlation', 'internet', 'spark', 'ping', 'sync', 'conversation',
    'feeling', 'interaction', 'parallels', 'signal', 'service', 'port', 'network', 'close', 'performance', 
    'bad', 'good', 'bridge', 'involved', 'fasten'],
    description: ['definition', 'title', 'characterization', 'explanation', 'explain', 'name', 'details',
    'text', 'picture', 'statement', 'summary', 'attributes', 'comment', 'story', 'match', 'matching', 'matches',
    'adjective', 'idea', 'suspect', 'about', 'transcript', 'parapgraph', 'type', 'write', 'intro', 'page', 
    'review', 'visual', 'visualize', 'quote', 'language'],
    love: ['bond', 'relationship', 'intimacy', 'adore', 'romance', 'passion', 'emotion', 'heart', 'kiss', 'cupid',
    'valentines', 'obsession', 'marriage', 'together', 'bird', 'rose', 'feeling', 'dream', 'song', 'sex', 'god', 
    'interest', 'marry', 'hormone', 'gift', 'language', 'fear', 'people', 'partner', 'self'],
    media: ['news', 'internet', 'radio', 'network', 'video', 'social', 'sound', 'entertainment', 'computer',
    'public', 'people', 'digital', 'online', 'clips', 'footage', 'culture', 'picture', 'music', 'politics',
    'audience', 'web', 'influencer', 'viewer', 'event'],
    consequence: ['result', 'effect', 'outcome', 'impact', 'choice', 'punishment', 'aftermath', 'cause', 'action', 
    'repercussion', 'byproduct', 'risk', 'issue', 'cost', 'discipline', 'event', 'penalty', 'problem', 'danger', 
    'backlash', 'stress', 'fear', 'damage', 'regret', 'suffer', 'fail', 'failure'],
    pizza: ['cheese', 'food', 'italy', 'pepperoni', 'tomato', 'bread', 'sauce', 'restaurant', 'oven', 'leftover', 
    'slice', 'pie', 'dinner', 'lunch', 'frozen', 'pineapple', 'italian', 'kitchen', 'freezer', 'microwave', 'ingest',
    'consume'],
    cigarette: ['cigar', 'tobacco', 'nicotine', 'smoke', 'smoking', 'lungs', 'cancer', 'vape', 'butt', 'smoker',
    'inhale', 'gum', 'pack', 'drug', 'puff', 'lighter', 'light', 'fire', 'marlboro', 'taxes', 'expensive', 'menthol',
    'hit', 'smell', 'flavor', 'blunt', 'leaf', 'addictive', 'addicting', 'addict', 'product', 'import', 'ban', 'bans',
    'cancerous', 'abuse'],
    blood: ['heart', 'oxygen', 'hemoglobin', 'gore', 'horror', 'stream', 'plasma', 'inflection', 'organ', 'organs', 
    'liver', 'vein', 'kidney', 'brain', 'cells', 'cell', 'knife', 'human', 'vessel', 'platelet', 'fluid', 'lung',
    'stomach', 'red', 'iron', 'fluids', 'clot', 'pulse', 'transfusion', 'menstruation', 'type', 'test', 'ancestry', 
    'ancestor', 'nutrients', 'nutrient', 'circulation', 'circulate', 'injury', 'injuries', 'labs','lab', 'vampire',
    'sacrifice', 'moon', 'orange', 'murder', 'stab'],
    dirt: ['stain', 'stains', 'mud', 'filth', 'clay', 'soil', 'grime', 'scandal', 'earth', 'ground', 'dust', 'muck',
    'muddy', 'debris', 'grass', 'pants', 'shoes', 'clothes', 'crap', 'ditches', 'ditch', 'gossip', 'trash', 'contamination',
    'contaminate', 'garbage', 'rocks', 'rock', 'manure', 'plants', 'plant', 'trees', 'tree', 'barefoot', 'street', 'germs', 
    'bugs', 'insects', 'bug', 'insect', 'moisture', 'grow', 'face', 'unclean', 'sediment', 'road', 'forest', 'pot'],
    trainer: ['waist', 'physical', 'coach', 'manager', 'instructor', 'condition', 'horse', 'breeder', 'box', 'boxer', 'teacher',
    'gym', 'pokemon', 'sneaker', 'fitness', 'improvement', 'improve', 'pet', 'dog', 'cat', 'workout', 'partner', 'strength',
    'stamina', 'bodybuilder', 'expert', 'program', 'person', 'exercise', 'mentor', 'teammate', 'educate', 'educator', 'sports',
    'sport', 'rookie', 'beginner', 'teach', 'learn', 'mastery'],
    relationship: ['friendship', 'dating', 'date', 'partner', 'marriage', 'partnership', 'ties', 'affair', 'assocation', 'state',
    'family', 'brother', 'sister', 'friends', 'friend', 'feelings', 'significant', 'future', 'boundaries', 'sex', 'emotion', 'emotional',
    'breakup', 'loss', 'trust', 'rift', 'break', 'couple', 'history', 'child', 'parent', 'dynamic', 'tied', 'pair', 'drama', 'close', 'adult'],
    beer: ['wine', 'drinks', 'drink', 'beverage', 'wheat', 'brew', 'suds', 'brewery', 'pubs', 'pub', 'pint', 'liver', 'glass', 'bottle',
    'micro', 'drunk', 'piss', 'party', 'drug', 'abuse', 'oktoberfest', 'adult', 'money', 'bar', 'ingest', 'sip', 'bartender', 'consume'],
    knowledge: ['information', 'skills', 'expertise', 'expert', 'learn', 'learning', 'aware', 'awareness', 'process', 'power', 'wisdom',
    'insight', 'mind', 'think', 'understand', 'subject', 'memory', 'possess', 'background', 'perspective', 'data', 'head', 'curiosity', 
    'curious', 'books', 'study', 'school', 'concept', 'concepts', 'intellect', 'smart', 'mastery', 'application', 'apply'],
    improvement: ['better', 'change', 'develop', 'development', 'upgrade', 'renovation', 'renovate', 'progress', 'adjust', 'reform',
    'repair', 'growth', 'grow', 'different', 'difference', 'increase', 'self', 'help', 'fix', 'work', 'practice', 'boost', 'innovation',
    'feedback', 'benefit', 'health', 'time', 'house', 'restoration', 'restore'],
    resolution: [],
    payment: [],
    customer: [],
    charity: [],
    failure: [],
    initiative: [],
    bonus: [],
    permision: [],
    platform: [],
    judgment: [],
    requirement: [],
    chest: [],
    personality: [],
    coffee: [],
    wood: [],
    garbage: [],
    response: [],
    imagination: [],
    marriage: [],
    excitement: [],
    resource: [],
    cheek: [],
    pupil: [],
    committee: [],
    mode: []}]


console.log(wordPool)

/*---------------------------- Variables (state) ----------------------------*/
let winningWords =[]
let assassinWords = []
let bystanderWords = []



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



