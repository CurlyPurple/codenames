
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
     outcome: ['event', 'fallout', 'issue',  'result', 'consequence', 'conclusion', 'manifestation', 'commitment', 'bond',
    'reaction', 'aftereffect', 'aftermath', 'end', 'payback', 'score', 'cause', 'win','effect','justify','reason','finish',
    'decision', 'situation', 'scenario', 'experience', 'fate', 'future', 'reward', 'victorious', 'path', 'game', 'ramification',
    'lose', 'verdict', 'model', 'experiment', 'prediction', 'paperwork', 'evaluation', 'report', 'recipe', 'feast', 'destination', 
    'conclusion', 'endpoint', 'wish', 'milestone', 'celebration', 'risk', 'flaw', 'investment', 'value', 'output', 'yield', 'return',
    'profit', 'revenue', 'earnings', 'discovery', 'innovation', 'link', 'defeat', 'victory', 'summary', 'overview', 'story', 'message',
    'carryout', 'delivery', 'habit', 'death', 'addiction', 'hemorrhage', 'donation', 'growth', 'progress', 'development', 
    'communication', 'commitment', 'drunk', 'wisdom', 'insight', 'advancement', 'enhancement', 'settlement', 'invoice', 
    'remuneration', 'experience', 'feedback', 'satisfaction', 'support', 'contribution', 'impact', 'lesson', 'compensation', 'reward',
    'authorization', 'approval', 'verdict', 'ruling', 'treasure', 'attitude', 'focus', 'energy', 'finish', 'home', 'house', 'waste',
    'creation', 'family', 'children', 'union', 'success', 'triumph', 'utilization', 'learning', 'mastery', 'insight', 'pattern',
    'legend', 'myth', 'exploration', 'discovery'],
    desk: ['counter', 'standing', 'secretary', 'work', 'workspace', 'davenport', 'school', 'writing', 'wooden', 'hold', 
    'office', 'chair', 'homework','table', 'room', 'workstation', 'receptionist', 'reception', 'study', 'research', 'academic',
    'tech', 'gaming', 'station', 'paperwork', 'evaluation', 'report', 'cafeteria', 'lunch', 'welcome', 'front', 'entry',
    'gift', 'decoration', 'support', 'ergonomics', 'rest', 'adjustment', 'trading', 'exchange', 'payroll', 'experiment', 
    'laboratory', 'network', 'bridge', 'catalog', 'document', 'inventory', 'affair', 'press', 'news', 'newsroom', 'editor',
    'enforcement', 'policy', 'order', 'delivery', 'ashtray', 'lighter', 'emergency', 'injury', 'cleanup', 'mess', 'gym', 'teamwork',
    'communication', 'partnership', 'tap', 'library', 'research', 'scholar', 'upgrade', 'computer', 'payroll', 'billing', 
    'service', 'volunteer', 'fundraising', 'flaw', 'collapse', 'project', 'boss', 'decision', 'specification', 'compartment', 'drawer',
    'storage', 'cabinet', 'mug', 'break', 'oak', 'mahogany', 'cherry', 'walnut', 'clutter', 'mess', 'junk', 'email', 'daydream',
    'creative', 'organization', 'success', 'human', 'assignment', 'classroom', 'thermostat', 'temperature', 'scroll', 'hoard',
    'blue', 'blueprint'], 
    meal: ['snack', 'breakfast', 'lunch', 'dinner', 'food', 'knife', 'fork', 'spoon', 'cuisine', 'gourmet', 'recipe',
    'menu', 'dish', 'feast', 'entree', 'steak', 'eat', 'picnic', 'restaurant','nutrient', 'cafeteria', 'banquet', 'cake',
    'recipe', 'service', 'dishes', 'kitchen', 'event', 'delivery', 'sleep', 'takeout', 'free', 'ration', 'reception',
    'money', 'thanksgiving', 'health', 'buffett', 'course', 'dollar', 'money', 'ingest', 'consume', 'cafe', 'celebration',
    'indulgence', 'comfort', 'craving', 'satiety', 'fine', 'tip', 'buffett', 'spread', 'plenty', 'staple', 'earn',
    'nutrition', 'diet', 'digestion', 'calories', 'gathering', 'hospitality', 'tasting', 'presentation', 'nourishment',
    'review', 'foodie', 'decadence', 'diet', 'full', 'delivery', 'takeout', 'carryout', 'appetite', 'break', 'rare', 'iron', 
    'farm', 'organic', 'fresh', 'date', 'family', 'cheers', 'pub', 'plan', 'bill', 'check', 'tab', 'service', 'feedback', 
    'satisfaction', 'donation', 'burnt', 'spoiled', 'cookbook', 'chef', 'dessert', 'treat', 'reservation', 'invite', 'palate',
    'critique', 'provision', 'essential', 'belly', 'brunch', 'cafe', 'campfire', 'smokehouse', 'grill', 'compost', 'leftover', 
    'scrap', 'fusion', 'epicurean', 'gala', 'festival', 'ingredients', 'harvest', 'lunchbox', 'sous', 'barbecue', 'picnic', 'patio',
    'roast', 'seafood', 'fish', 'mess'],
    arrival: ['departure', 'return', 'appearance', 'landing', 'visit', 'annoucement', 'trip', 'forecast', 'anticipation', 
    'homecoming', 'incoming', 'income', 'entrance', 'welcome', 'presence', 'impending', 'birth', 'prediciton', 'expectation',
    'visitor', 'late', 'shipping', 'delivery', 'creation', 'travel', 'travelling', 'holiday', 'flight', 'result', 'conclusion', 
    'destination', 'endpoint', 'reception', 'entry', 'banquet', 'reception', 'party', 'birth', 'terminal', 'traffic', 'shipment',
    'baggage', 'paycheck', 'exploration', 'introduction', 'reunion', 'live', 'delivery', 'zones', 'areas', 'ambulance',
    'trails', 'footprints', 'appointment', 'date', 'meetup', 'milestone','frontline', 'deployment', 'invasion', 'port',
    'homeroom', 'landing', 'land', 'depot', 'landfill', 'dump', 'trunk'],
    birthday: ['celebration', 'cake', 'gift', 'party', 'celebrate', 'special', 'happy', 'dinner', 'cycle', 'decoration',
    'candle', 'festivities', 'group', 'age', 'yearly', 'year', 'suit', 'month', 'milestone', 'annually', 'invitation',
    'present', 'card', 'balloons', 'balloon', 'trip', 'friends', 'friend', 'hat', 'occasion', 'wish', 'memory', 'feast',
    'aging','brittle','twins', 'speakers', 'astrology','carbon', 'twins','post','gathering','social','hungover','candles',
    'treated', 'lit', 'clown','backyard','pokemon','sex', 'wisdom','treat','fundraiser','no-show','surprise','annual','reservation',
    'pirate','celebrity','free','pinata','cruise','yacht','tales','barbecue','thrill','joy','suit', 'dress'],
    weakness: ['strength', 'feeble', 'frail', 'vulnerable', 'slow', 'strong', 'imperfect', 'lower', 'risk', 'consequence',
    'flimsy', 'dilute', 'fear', 'resist', 'damage', 'ineffective', 'exhaustion', 'muscle', 'limit', 'flaw', 'adjustment',
    'limits', 'limitation', 'detriment', 'decline', 'susceptibility', 'vulnerability', 'ergonomics', 'rest', 'comfort',
    'craving', 'satiety', 'indulgence', 'fatigue', 'birth','aging', 'brittle'],
    currency: ['money', 'coin', 'dollar', 'cash', 'bank', 'debt', 'country', 'credit', 'asset', 'exchange', 'investment',
    'store', 'liquid', 'paper', 'resource', 'gold', 'silver', 'exchange', 'finance', 'crypto', 'devaluation', 'trading',
    'digital', 'power', 'shop', 'buy', 'sell', 'foreign', 'fees', 'transaction', 'rates', 'platform', 'economy', 'fine', 'tip',
    'debit', 'interest', 'product', 'products', 'wallet', 'purse', 'amount', 'count', 'value', 'devalue', 'valuation', 'rate',
    'terminal','gift'],
    volume: ['mass', 'quantity', 'amount','weight', 'length', 'bulk', 'measure', 'gallon', 'density', 'capacity', 'magnitude', 
    'production', 'book', 'size', 'paperback', 'area', 'mute', 'music', 'sound', 'raise', 'lower', 'intensity', 'trading', 'market',
     'level', 'distance', 'audio', 'speaker', 'dimensions', 'shares','business', 'finance', 'result', 'return', 'output', 'buffet',
    'spread', 'plenty', 'traffic', 'shipment', 'baggage','speakers'],
    income: ['wealth', 'profit', 'revenue', 'salary', 'hourly', 'hustle', 'money', 'tax', 'wage', 'earnings', 'yield',
    'benefits', 'debt', 'cash', 'debit', 'save', 'savings', 'account', 'employmeny', 'job', 'work', 'gain', 'payroll',
    'expenses', 'expense', 'asset', 'value', 'raise', 'purchase', 'buy', 'cycle', 'check','business', 'finance', 'earn', 
    'staple', 'paycheck', 'gift'], 
    science: ['method', 'biology', 'chemistry', 'physics', 'math', 'technology', 'observation', 'hypothesis', 'laboratory',
    'analytics', 'experiment', 'nature', 'human', 'data', 'predict', 'progress', 'health', 'innovation', 'discovery', 
    'institute', 'school', 'evidence', 'life', 'degree', 'test', 'evolution', 'grade', 'museum', 'measure',
    'study', 'formula', 'fiction', 'concept', 'teacher', 'instructor', 'hormone', 'subject', 'anatomy', 'psychology',
    'nutrition', 'diet', 'digestion', 'calories', 'exploration','astrology', 'carbon'], 
    connection: ['bond','link', 'attachment', 'contact', 'junction', 'association', 'relate', 
    'relevance', 'concatenation', 'communication', 'hookup', 'friend', 'friendship', 'affiliation',
    'intimacy', 'together', 'history', 'correlation', 'internet', 'spark', 'ping', 'sync', 'conversation',
    'feeling', 'interaction', 'parallels', 'signal', 'service', 'port', 'network', 'close', 'performance', 
    'bad', 'good', 'bridge', 'involved', 'fasten', 'join', 'network', 'gathering', 'hospitality', 'flight', 'twins'],
    description: ['definition', 'title', 'characterization', 'explanation', 'explain', 'name', 'details', 'overview',
    'text', 'picture', 'statement', 'summary', 'attributes', 'comment', 'story', 'match', 'matching', 'matches',
    'adjective', 'idea', 'suspect', 'about', 'transcript', 'parapgraph', 'type', 'write', 'intro', 'page', 'summary',
    'review', 'visual', 'visualize', 'quote', 'language', 'model', 'framework', 'concept', 'depiction', 'catalog', 'profile',
    'document', 'inventory', 'menu', 'presentation', 'introduction', 'post'],
    love: ['bond', 'intimacy', 'adore', 'romance', 'passion', 'emotion', 'heart', 'kiss', 'cupid', 'affection', 'devotion', 
    'valentines', 'obsession', 'together', 'bird', 'rose', 'feeling', 'dream', 'song', 'sex', 'god', 'commitment', 'support',
    'interest', 'marry', 'hormone', 'gift', 'language', 'fear', 'people', 'partner', 'self', 'flirty', 'fall', 'affair', 'support',
    'comfort', 'nourishment', 'reunion','gathering'],
    media: ['news', 'internet', 'radio', 'network', 'video', 'social', 'sound', 'entertainment', 'computer', 'coverage', 'press',
    'public', 'people', 'digital', 'online', 'clips', 'footage', 'culture', 'picture', 'music', 'politics', 'impact', 'story',
    'audience', 'web', 'influencer', 'viewer', 'event', 'communication', 'message', 'messaging', 'coverage', 'platform', 'editor',
    'newsroom', 'review', 'foodie', 'live', ''],
    consequence: ['result', 'effect', 'ramification', 'implication', 'impact', 'choice', 'punishment', 'aftermath', 'cause', 'action', 
    'repercussion', 'byproduct', 'risk', 'issue', 'cost', 'discipline', 'event', 'penalty', 'problem', 'danger', 
    'backlash', 'stress', 'fear', 'damage', 'regret', 'suffer', 'fail', 'failure', 'enforcement', 'policy', 'decadence',
    'diet', 'full', 'hungover'],
    pizza: ['cheese', 'food', 'italy', 'pepperoni', 'tomato', 'bread', 'sauce', 'restaurant', 'oven', 'leftover', 
    'slice', 'pie', 'dinner', 'lunch', 'frozen', 'pineapple', 'italian', 'kitchen', 'freezer', 'microwave', 'ingest',
    'consume', 'recipe', 'crust', 'topping', 'toppings', 'aroma', 'delivery', 'carryout', 'order', 'menu', 'takeout', 
    'full','treated'],
    cigarette: ['cigar', 'tobacco', 'nicotine', 'smoke', 'smoking', 'lungs', 'cancer', 'vape', 'butt', 'smoker',
    'inhale', 'gum', 'pack', 'drug', 'puff', 'lighter', 'light', 'fire', 'marlboro', 'taxes', 'expensive', 'menthol',
    'hit', 'smell', 'flavor', 'blunt', 'leaf', 'addictive', 'addicting', 'addict', 'product', 'import', 'ban', 'bans',
    'cancerous', 'abuse', 'habit', 'habits', 'health', 'addiction', 'death', 'ashtray', 'appetite', 'break', 'zones', 'areas',
    'lit'],
    blood: ['heart', 'oxygen', 'hemoglobin', 'gore', 'horror', 'stream', 'plasma', 'inflection', 'organ', 'organs', 'hemorrhage',
    'liver', 'vein', 'kidney', 'brain', 'cells', 'cell', 'knife', 'human', 'vessel', 'platelet', 'fluid', 'lung', 'injury',
    'stomach', 'red', 'iron', 'fluids', 'clot', 'pulse', 'transfusion', 'menstruation', 'type', 'test', 'ancestry', 'emergency',
    'ancestor', 'nutrients', 'nutrient', 'circulation', 'circulate', 'injury', 'injuries', 'labs','lab', 'vampire',
    'sacrifice', 'moon', 'orange', 'murder', 'stab','donate', 'doantion', 'donations', 'donor', 'wound', 'vital', 'coagulation',
    'sacrifice', 'rare', 'thirst', 'ambulance', 'clown'],
    dirt: ['stain', 'stains', 'mud', 'filth', 'clay', 'soil', 'grime', 'scandal', 'earth', 'ground', 'dust', 'muck', 'erosion',
    'muddy', 'debris', 'grass', 'pants', 'shoes', 'clothes', 'crap', 'ditches', 'ditch', 'gossip', 'trash', 'contamination', 'planting',
    'contaminate', 'garbage', 'rocks', 'rock', 'manure', 'plants', 'plant', 'trees', 'tree', 'barefoot', 'street', 'germs', 'growing',
    'bugs', 'insects', 'bug', 'insect', 'moisture', 'grow', 'face', 'unclean', 'sediment', 'road', 'forest', 'pot', 'fertility',
    'gardening', 'growth', 'cleanup', 'mess', 'farm', 'organic', 'fresh','trails', 'footprints','picnic', 'backyard'],
    trainer: ['waist', 'physical', 'coach', 'manager', 'instructor', 'condition', 'horse', 'breeder', 'box', 'boxer', 'teacher',
    'gym', 'pokemon', 'sneaker', 'fitness', 'improvement', 'improve', 'pet', 'dog', 'cat', 'workout', 'partner', 'strength',
    'stamina', 'bodybuilder', 'expert', 'program', 'person', 'exercise', 'mentor', 'teammate', 'educate', 'educator', 'sports',
    'sport', 'rookie', 'beginner', 'teach', 'learn', 'mastery', 'pedagogy', 'instruction', 'education', 'guide', 'guidance', 'growth', 
    'performance', 'development', 'progress', 'office', 'diet', 'organic', 'nutrition', 'appointment',],
    relationship: ['friendship', 'dating', 'date', 'partner', 'marriage', 'partnership', 'ties', 'affair', 'assocation', 'state',
    'family', 'brother', 'sister', 'friends', 'friend', 'feelings', 'significant', 'future', 'boundaries', 'sex', 'emotion', 'emotional',
    'breakup', 'loss', 'trust', 'rift', 'break', 'couple', 'history', 'child', 'parent', 'dynamic', 'tied', 'pair', 'drama', 'close', 'adult',
    'association', 'interdependence', 'interconnection', 'commitement', 'communication', 'teamwork', 'balance', 'date', 'meetup'],
    beer: ['wine', 'drinks', 'drink', 'beverage', 'wheat', 'brew', 'suds', 'brewery', 'pubs', 'pub', 'pint', 'liver', 'glass', 'bottle',
    'micro', 'drunk', 'piss', 'party', 'drug', 'abuse', 'oktoberfest', 'adult', 'money', 'bar', 'ingest', 'sip', 'bartender', 'consume',
    'brewing', 'fermentation', 'craft', 'tasting', 'blend', 'aroma', 'tap', 'cheers', 'shipment', 'delivery','hungover' ],
    knowledge: ['information', 'skills', 'expertise', 'expert', 'learn', 'learning', 'aware', 'awareness', 'process', 'power', 'wisdom',
    'insight', 'mind', 'think', 'understand', 'subject', 'memory', 'possess', 'background', 'perspective', 'data', 'head', 'curiosity', 
    'curious', 'books', 'study', 'school', 'concept', 'concepts', 'intellect', 'smart', 'mastery', 'application', 'apply', 'cognition',
    'understanding', 'epistemology', 'scholar', 'research', 'study', 'library',],
    improvement: ['better', 'change', 'develop', 'development', 'upgrade', 'renovation', 'renovate', 'progress', 'adjust', 'reform',
    'repair', 'growth', 'grow', 'different', 'difference', 'increase', 'self', 'help', 'fix', 'work', 'practice', 'boost', 'innovation',
    'feedback', 'benefit', 'health', 'time', 'house', 'restoration', 'restore', 'optimization', 'optimize', 'enhancement', 'enhance', 'refine', 
    'refinement', 'gourmet', 'diet', 'nutrition', 'milestone','wisdom'],
    resolution: ['quality', 'camera', 'photo', 'declaration', 'determined', 'determination', 'decision', 'document', 'proposal', 'decision',
    'compromise', 'answer', 'solve', 'purpose', 'graphics', 'performance', 'rate', 'conflict', 'monitor', 'screen', 'closure', 'display', 
    'image', 'color', 'sharp', 'low', 'video', 'poor', 'contrast', 'computer', 'pact', 'debate', 'speech', 'solution', 'settlement', 'conclusion',
    'computer', 'plan'],
    payment: ['credit', 'debit', 'check', 'cash', 'refund', 'money', 'receipt', 'installment', 'salary', 'fee', 'bonus', 'premium', 'royalty',
    'incentive', 'amount', 'costs', 'cost', 'shipping', 'down', 'bank', 'donation', 'bill', 'charge', 'employer', 'car', 'processing', 
    'receivable', 'sale', 'direct', 'funds', 'tips', 'gratuity', 'overdue', 'tuition', 'missed', 'wallet', 'cards', 'compensation', 'compensate', 
    'exchange', 'remuneration', 'transaction', 'invoice', 'settlement', 'payroll', 'billing', 'bill', 'tab','gift','treat'],
    customer: ['transaction', 'client', 'exchange', 'use', 'retail', 'shop', 'shopper', 'vendor', 'goods', 'food', 'service', 'buyer',
    'hospitality', 'person', 'store', 'order', 'returns', 'associate', 'products', 'consumer', 'patron', 'visitor', 'satisfaction', 
    'experience', 'feedback'],
    charity: ['foundation', 'money', 'donation', 'donations', 'gift', 'marketing', 'donate', 'organization', 'philanthropy', 'fundraiser', 
    'fundraising', 'handout', 'fund', 'funds', 'taxes', 'tax', 'orphans', 'orphan', 'institution', 'help', 'giveaway', 'donor', 'celebrities',
    'offering', 'benefit', 'aid', 'nonprofit', 'service', 'kindness', 'kind', 'care', 'rescue', 'poor', 'event', 'events', 'children', 'child',
    'contribution', 'contributions', 'altruism', 'benefaction', 'generous', 'generosity', 'support', 'impact', 'volunteer', 'food'],
    failure: ['success', 'loss', 'lose', 'inability', 'flop', 'lack', 'collapse', 'error', 'malfunction', 'problem', 'problems', 'flunk', 
    'defeat', 'miscalculation', 'system', 'bad', 'learn', 'shame', 'result', 'pain', 'bugs', 'glitch', 'crash', 'avoid', 'threat', 'doubt', 
    'unsuccessful', 'blunder', 'blooper', 'unfortunate', 'disappoint', 'disappointed', 'wrong', 'risk', 'challenge', 'experiment', 'hypothesis',
    'lesson', 'experience', 'flaw', 'burnt', 'spoiled','no-show'],
    initiative: ['project', 'effort', 'program', 'combat', 'petition', 'first', 'plan', 'steps', 'action', 'leadership', 'strategy', 'policy', 
    'pledge', 'momentum', 'create', 'fight', 'energy', 'idea', 'campaign', 'education', 'vision', 'measure', 'begin', 'fund', 'blueprint', 
    'promises', 'promise', 'develop', 'enterprise', 'innovation', 'venture', 'impact', 'cookbook','surprise'],
    bonus: ['incentive', 'salary', 'reward', 'premium', 'raise', 'extra', 'commission', 'package', 'winnings', 'win', 'signing', 'package', 
    'prize', 'prizes', 'cost', 'gift', 'benefit', 'wage', 'boost', 'award', 'offer', 'office', 'paid', 'money', 'compensate', 'promotion', 
    'promotional', 'yearly', 'annual', 'earn', 'merit', 'compensation', 'perk', 'treat', 'dessert'],
    permission: ['consent', 'approval', 'license', 'authorize', 'authorization', 'pass', 'clearance', 'clear', 'grant', 'sanction', 'written',
    'allow', 'explicit', 'slip', 'waiver', 'preapproved', 'approve', 'seek', 'obtain', 'boss', 'reservation', 'invite'],
    judgment: ['opinion', 'validation', 'decision', 'verdict', 'justice', 'court', 'jury', 'law', 'ruling', 'gossip', 'estimate', 'estimation',
    'mind', 'final', 'sound', 'guilty', 'innocent', 'critique', 'feel', 'fear', 'intuition', 'guilt', 'moral', 'characterization', 'correct', 
    'sentence', 'assessment', 'evaluation', 'analysis', 'conclusion', 'review', 'palate','stares',''],
    requirement: ['necessity', 'ratio', 'necessary', 'prerequisite', 'need', 'essential', 'must', 'obligation', 'mandatory', 'responsibility',
    'demand', 'guideline', 'guidelines', 'minimum', 'limit', 'limitation', 'mandate', 'standard', 'standards', 'rules', 'threshold', 'clause', 
    'qualification', 'qualifications', 'condition', 'measure', 'fulfill', 'criteria', 'stipulation', 'needs', 'job', 'basic', 'specification', 
    'criterion', 'compliance', 'provision',''],
    chest: ['heart', 'neck', 'torso', 'back', 'lungs', 'lung', 'breast', 'body', 'box', 'treasure', 'cavity', 'trunk', 'compartment', 
    'loot', 'pirate', 'key', 'skin', 'anatomy', 'wound', 'beat', 'muscle', 'grow', 'pectoral', 'toy', 'tool', 'vault', 'container', 
    'victory', 'reward', 'storage', 'full', 'belly', ''],
    personality: ['character', 'identity', 'attitude', 'trait', 'ego', 'individual', 'charisma', 'charm', 'self', 'demeanor', 'humor',
    'temperament', 'qualities', 'emotion', 'emotional', 'extrovert', 'introvert', 'extroverted', 'introverted', 'attribute', 'kind', 
    'mean', 'behavior', 'brain', 'celebrity', 'quirky', 'flirty', 'psychology', 'disposition', 'traits', 'profile', 'office', 'critique',
    'hospitality', 'celebrity'],
    coffee: ['drinks', 'drink', 'beverage', 'caffeine', 'espresso', 'bean', 'iced', 'brew', 'cafe', 'consume', 'ingest', 'energy', 'sip', 
    'mug', 'decaf', 'cup', 'roast', 'shop', 'grow', 'breakfast', 'hot', 'cold', 'work', 'office', 'donuts', 'pot', 'table', 'morning', 
    'black', 'blend', 'aroma', 'focus', 'break', 'brunch', 'cafe','free'],
    wood: ['table', 'cabin', 'oak', 'lumber', 'maple', 'tree', 'bamboo', 'hard', 'material', 'furniture', 'logs', 'soil', 'twigs', 'cutting',
    'ply', 'trunk', 'pieces', 'sturdy', 'thick', 'house', 'floor', 'paper', 'trees', 'fire', 'camp', 'camping', 'forest', 'cherry', 'chips', 
    'termite', 'stove', 'stoves', 'splinter', 'timber', 'finish', 'home', 'mahogany', 'walnut', 'farm', 'campfire', 'smokehouse', 'grill',
    'pinata'],
    garbage: ['recycle', 'recycling', 'trash', 'waste', 'landfill', 'rubbish', 'sewage', 'compost', 'debris', 'junk', 'dump', 'dispose', 
    'disposal', 'bin', 'piles', 'bags', 'bag', 'can', 'cans', 'curbside', 'sanitation', 'smell', 'filth', 'clean', 'crap', 'janitor',
    'truck', 'stink', 'throw', 'toss', 'rubbish', 'conjecture', 'mess', 'clutter', 'leftover', 'scrap',],
    response: ['reaction', 'answer', 'reply', 'feedback', 'retort', 'statement', 'comeback', 'counter', 'result', 'rebuttal', 'comment',
    'question', 'post', 'behavior', 'action', 'provoke', 'apology', 'opinion', 'alert', 'excuse', 'interaction', 'email', 'message', 
    'speech', 'clear', 'negative', 'positive', 'reflex', 'assertion', 'postulate', 'impact', 'review', 'commentary'],
    imagination: ['creativity', 'creative', 'mind', 'vision', 'imagery', 'fantasy', 'inspiration', 'child', 'children', 'dream', 
    'curiousity', 'thoughts', 'thought', 'think', 'thinking', 'passion', 'skill', 'brain', 'head', 'idea', 'reality', 'visionary', 
    'instinct', 'story', 'fiction', 'magic', 'conception', 'speculation', 'concept', 'ideation', 'innovation', 'creation', 'daydream',
    'fusion', 'epicurean'],
    marriage: ['wedding', 'divorce', 'family', 'spouse', 'union', 'civil', 'dating', 'partner', 'partnership', 'commitment', 'couple',
    'ceremony', 'engagement', 'proposal', 'arranged', 'contract', 'happy', 'broken', 'kiss', 'ring', 'legal', 'annulment', 'intimate', 
    'intimacy', 'bond', 'children', 'journey', 'organization', 'fusion', 'reception', 'banquet','suit','dress'],
    excitement: ['joy', 'hype', 'anxiety', 'thrill', 'anticipation', 'euphoria', 'passion', 'frenzy', 'happy', 'happiness', 'interest', 
    'feeling', 'feel', 'fun', 'delight', 'drama', 'adrenaline', 'surprise', 'danger', 'pleasure', 'emotion', 'smile', 'reaction', 
    'discovery', 'breakthrough', 'epiphany', 'innovation', 'victory', 'achievement', 'success', 'feast', 'festival', 'gala'],
    resource: ['support', 'time', 'natural', 'human', 'sustain', 'sustainability', 'funds', 'fund', 'funding', 'oil', 'power', 'energy',
    'commodity', 'minerals', 'asset', 'assests', 'provide', 'valuable', 'vital', 'allocate', 'allocation', 'approach', 'framework', 'tool',
    'utilization', 'capability', 'ingredients', 'harvest', 'depot'],
    pupil: ['iris', 'teacher', 'student', 'eye', 'school', 'students', 'education', 'class', 'mentor', 'learn', 'see', 'vision', 'eyes', 
    'optics', 'optical', 'dilate', 'dilation', 'uniform', 'ophthalmology', 'iridology', 'learning', 'classroom', 'mastery', 'progression',
    'insight', 'assignment', 'lunchbox', 'sous', 'homeroom'],
    weather: ['climate', 'snow', 'wind', 'rain', 'storm', 'sun', 'winter', 'fall', 'atmosphere', 'cold', 'hot', 'air', 'temperature', 
    'bad', 'news', 'forecast', 'proof', 'nature', 'natural', 'spring', 'summer', 'person', 'visibility', 'travel', 'sky', 'meteorology',
    'pattern', 'season', 'thermostat', 'farm', 'barbecue', 'picnic', 'patio', ''],
    dragon: ['wind', 'fire', 'lizard', 'fly', 'flight', 'wings', 'beast', 'creature', 'legend', 'magic', 'magical', 'knights', 'kings', 
    'dungeon', 'mythical', 'big', 'scales', 'tail', 'egg', 'sky', 'treasure', 'large', 'lord', 'mythology', 'fantasy', 'folklore', 'death',
    'adventure','myth', 'quest', 'scroll', 'hoard', 'feast', 'roast', 'landing', 'land','tales','tails'],
    ocean: ['big', 'sea', 'vast', 'water', 'beach', 'shore', 'salt', 'waves', 'blue', 'creatures', 'whale', 'fish', 'mermaid', 'currents', 
    'boat', 'ship', 'travel', 'floor', 'eyes', 'world', 'large', 'fear', 'shark', 'moon', 'current', 'depth', 'wave', 'tide', 'voyage',
    'maritime', 'navigation', 'wrecks', 'horizon', 'exploration', 'nautical', 'discovery', 'seafood', 'shipment', 'port','cruise','yacht'],
    war: ['wounds', 'wound', 'military', 'fight', 'combat', 'battle', 'conflict', 'struggle', 'peace', 'invasion', 'weapon', 'death', 'crisis', 
    'campaign', 'civil', 'world', 'strategy', 'zone', 'nuclear', 'cold', 'machine', 'violence', 'win', 'lose', 'declare', 'anti', 'army', 
    'soldier', 'lord', 'aftermath', 'destruction', 'prisoner', 'art', 'tactics', 'tactic', 'doctrine', 'victory', 'defeat', 'blueprint',
    'ration', 'mess', 'frontline', 'deployment', 'invasion','gathering']
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


