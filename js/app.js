console.log('test');

/*-------------------------------- Constants --------------------------------*/
const wordPool = [{
    theory: ['approach', 'argument', 'assumption', 'concept', 'idea', 'ideology',
    'method','philosophy','plan','position','premise','proposal','rationale', 'speculation', 
    'suspicion', 'system', 'thesis', 'understanding', 'basis', 'feeling', 'guess', 'hunch',
    'outlook', 'presumption', 'surmise','hypothesis', 'suggestion', 'generalization', 'inkling',
    'knowledge','speaker', 'nature', 'Darwin', 'science', 'rumor', 'question','conspiracy', 'evolution',],
     outcome: ['conclusion', 'event', 'fallout', 'issue',
    'reaction','result', 'aftereffect', 'aftermath', 'end', 'payback', 'score', 'cause',
    'win','consequence','effect','justify','reason','finish', 'decision', 'situation', 'scenario',
    'experience', 'fate', 'future', 'reward', 'victorious', 'path', 'game', 'lose', 'verdict'],
    desk: ['counter', 'standing', 'secretary', 'work', 'workspace', 'davenport', 'school', 'writing', 'wooden', 'hold', 
    'office', 'chair', 'homework','table', 'room', 'workstation', 'receptionist', 'reception',
    'tech', 'gaming', 'station'], 
    meal: ['snack', 'breakfast', 'lunch', 'dinner', 'food',
    'menu', 'dish', 'feast', 'entree', 'steak', 'eat', 'picnic', 'restaurant','nutrient',
    'recipe', 'service', 'dishes', 'kitchen', 'event', 'delivery', 'sleep', 'takeout', 'free',
    'money', 'thanksgiving', 'health', 'buffett', 'course', 'dollar', 'money'],
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
    'analytics', 'experiment', 'nature', 'knowledge', 'human', 'data', 'predict', 'progress', 'health', 
    'institute', 'school', 'evidence', 'life', 'degree', 'test', 'evolution', 'grade', 'museum', 'measure',
    'study', 'formula', 'fiction', 'concept', 'teacher', 'hormone'], 
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
    'interest', 'marry', 'hormone', 'gift', 'language', 'fear', 'people'],
    media: ['news', 'internet', 'radio', 'network', 'video', 'social', 'sound', 'entertainment', 'computer',
    'public', 'people', 'digital', 'online', 'clips', 'footage', 'culture', 'picture', 'music', 'politics',
    'audience', 'web', 'influencer', 'viewer', 'event'],
    consequence: [],
    pizza: [],
    cigarette: [],
    blood: [],
    dirt: [],
    trainer: [],
    relationship: [],
    beer: [],
    knowledge: [],
    improvement: [],
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



