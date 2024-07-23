
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
    'tactics', 'doctrine','evolution'],
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
    'craving', 'satiety', 'indulgence', 'fatigue', 'birth','aging', 'brittle','depreciation','quiet','mute','poor','darwin',
    'evolution','incompatible','vague','obsessed','addicting','hemophobia','barren','strength','cheating','dumb','blurry',
    'collapse','decaf','cracking', 'splinter','prisoner'],
    currency: ['money', 'coin', 'dollar', 'cash', 'bank', 'debt', 'country', 'credit', 'asset', 'exchange', 'investment',
    'store', 'liquid', 'paper', 'resource', 'gold', 'silver', 'exchange', 'finance', 'crypto', 'devaluation', 'trading',
    'digital', 'power', 'shop', 'buy', 'sell', 'foreign', 'fees', 'transaction', 'rates', 'platform', 'economy', 'fine', 'tip',
    'debit', 'interest', 'product', 'products', 'wallet', 'purse', 'amount', 'count', 'value', 'devalue', 'valuation', 'rate',
    'terminal','gift','depreciation','economy','economics','greed','debt','purchase','taxes','membership','collapse','green',
    'rich','wealthy'],
    volume: ['mass', 'quantity', 'amount','weight', 'length', 'bulk', 'measure', 'gallon', 'density', 'capacity', 'magnitude', 
    'production', 'book', 'size', 'paperback', 'area', 'mute', 'music', 'sound', 'raise', 'lower', 'intensity', 'trading', 'market',
     'level', 'distance', 'audio', 'speaker', 'dimensions', 'shares','business', 'finance', 'result', 'return', 'output', 'buffet',
    'spread', 'plenty', 'traffic', 'shipment', 'baggage','speakers','quiet','mute','economy','rich','wealthy','abundant',
    'brewery','galaxy','polygamy'],
    income: ['wealth', 'profit', 'revenue', 'salary', 'hourly', 'hustle', 'money', 'tax', 'wage', 'earnings', 'yield',
    'benefits', 'debt', 'cash', 'debit', 'save', 'savings', 'account', 'employmeny', 'job', 'work', 'gain', 'payroll',
    'expenses', 'expense', 'asset', 'value', 'raise', 'purchase', 'buy', 'cycle', 'check','business', 'finance', 'earn', 
    'staple', 'paycheck', 'gift','poor','economy','greed','taxes','rich','wealthy'], 
    science: ['method', 'biology', 'chemistry', 'physics', 'math', 'technology', 'observation', 'hypothesis', 'laboratory',
    'analytics', 'experiment', 'nature', 'human', 'data', 'predict', 'progress', 'health', 'innovation', 'discovery', 
    'institute', 'school', 'evidence', 'life', 'degree', 'test', 'strategy', 'grade', 'museum', 'measure',
    'study', 'formula', 'fiction', 'concept', 'teacher', 'instructor', 'hormones','dopamine', 'subject', 'anatomy', 'psychology',
    'nutrition', 'diet', 'digestion', 'calories', 'exploration','astrology', 'carbon','darwin','evolution','economics',
    'mass','bond','paper','hormones','journalism','baking','nicotine','addiction','hemoglobin','metabolism','psychology',
    'pacemaker','caffeine','dilation', 'meteorology','fire'], 
    connection: ['bond','link', 'attachment', 'contact', 'junction', 'association', 'relate', 
    'relevance', 'concatenation', 'communication', 'hookup', 'friend', 'friendship', 'affiliation', 'incompatible',
    'intimacy', 'together', 'history', 'correlation', 'internet', 'spark', 'ping', 'sync', 'conversation', 'economics',
    'feeling', 'interaction', 'parallels', 'signal', 'service', 'port', 'network', 'close', 'performance', 'exchange',
    'bad', 'good', 'bridge', 'involved', 'fasten', 'join', 'network', 'gathering', 'hospitality', 'flight', 'twins'],
    description: ['definition', 'title', 'characterization', 'explanation', 'explain', 'name', 'details', 'overview',
    'text', 'picture', 'statement', 'summary', 'attributes', 'comment', 'story', 'match', 'matching', 'matches',
    'adjective', 'idea', 'suspect', 'about', 'transcript', 'parapgraph', 'type', 'write', 'intro', 'page', 'summary',
    'review', 'visual', 'visualize', 'quote', 'language', 'model', 'framework', 'concept', 'depiction', 'catalog', 'profile',
    'document', 'inventory', 'menu', 'presentation', 'introduction', 'post','vague','paper'],
    love: ['intimacy','bond',  'adore', 'romance', 'passion', 'emotion', 'heart', 'kiss', 'cupid', 'affection', 'devotion', 
    'valentines', 'obsession', 'together', 'bird', 'rose', 'feeling', 'dream', 'song', 'sex', 'god', 'commitment', 'support',
    'interest', 'marry', 'hormones', 'gift', 'language', 'fear', 'people', 'partner', 'self', 'flirty', 'fall', 'affair', 'support',
    'comfort', 'nourishment', 'reunion','gathering','obsessed','greed','abundant','dopamine','heartbreak','aficionado',
    'addiction','red','philomath','service','limerence','fair'],
    media: ['news', 'internet', 'radio', 'network', 'video', 'social', 'sound', 'entertainment', 'computer', 'coverage', 'press',
    'public', 'people', 'digital', 'online', 'clips', 'footage', 'culture', 'picture', 'music', 'politics', 'impact', 'story',
    'audience', 'web', 'influencer', 'viewer', 'event', 'communication', 'message', 'messaging', 'coverage', 'platform', 'editor',
    'newsroom', 'review', 'foodie', 'live', 'journalism','romance','ban'],
    consequence: ['result', 'effect', 'ramification', 'implication', 'impact', 'choice', 'punishment', 'aftermath', 'cause', 'action', 
    'repercussion', 'byproduct', 'risk', 'issue', 'cost', 'discipline', 'event', 'penalty', 'problem', 'danger', 
    'backlash', 'stress', 'fear', 'damage', 'regret', 'suffer', 'fail', 'failure', 'enforcement', 'policy', 'decadence',
    'diet', 'full', 'hungover','debt','heartbreak','overweight','death','mess'],
    pizza: ['cheese', 'food', 'italy', 'pepperoni', 'tomato', 'bread', 'sauce', 'restaurant', 'oven', 'leftover', 
    'slice', 'pie', 'dinner', 'lunch', 'frozen', 'pineapple', 'italian', 'kitchen', 'freezer', 'microwave', 'ingest',
    'consume', 'recipe', 'crust', 'topping', 'toppings', 'aroma', 'delivery', 'carryout', 'order', 'menu', 'takeout', 
    'full','treated','purchase','baking','aficionado','overweight','fire', 'smell'],
    cigarette: ['cigar', 'tobacco', 'nicotine', 'smoke', 'smoking', 'lungs', 'cancer', 'vape', 'butt', 'smoker',
    'inhale', 'gum', 'pack', 'drug', 'puff', 'lighter', 'light', 'fire', 'marlboro', 'taxes', 'expensive', 'menthol',
    'hit', 'smell', 'flavor', 'blunt', 'leaf', 'addictive', 'addicting', 'addict', 'product', 'import', 'ban', 'bans',
    'cancerous', 'abuse', 'habit', 'habits', 'health', 'addiction', 'death', 'ashtray', 'appetite', 'break', 'zones', 'areas',
    'lit','ground','burn','litter'],
    blood: ['heart', 'oxygen', 'hemoglobin', 'gore', 'horror', 'stream', 'plasma', 'inflection', 'organ', 'organs', 'hemorrhage',
    'liver', 'vein', 'kidney', 'brain', 'cells', 'cell', 'knife', 'human', 'vessel', 'platelet', 'fluid', 'lung', 'injury',
    'stomach', 'red', 'iron', 'fluids', 'clot', 'pulse', 'transfusion', 'menstruation', 'type', 'test', 'ancestry', 'emergency',
    'ancestor', 'nutrients', 'nutrient', 'circulation', 'circulate', 'injury', 'injuries', 'labs','lab', 'vampire',
    'sacrifice', 'moon', 'orange', 'murder', 'stab','donate', 'doantion', 'donations', 'donor', 'wound', 'vital', 'coagulation',
    'sacrifice', 'rare', 'thirst', 'ambulance', 'clown','hemophobia','money','health','doctor','wound', 'wounds'],
    dirt: ['stain', 'stains', 'mud', 'filth', 'clay', 'soil', 'grime', 'scandal', 'earth', 'ground', 'dust', 'muck', 'erosion',
    'muddy', 'debris', 'grass', 'pants', 'shoes', 'clothes', 'crap', 'ditches', 'ditch', 'gossip', 'trash', 'contamination', 'planting',
    'contaminate', 'garbage','pollution', 'rocks', 'rock', 'manure', 'plants', 'plant', 'trees', 'tree', 'barefoot', 'street', 'germs', 'growing',
    'bugs', 'insects', 'bug', 'insect', 'moisture', 'grow', 'face', 'unclean', 'sediment', 'road', 'forest', 'pot', 'fertility',
    'gardening', 'growth', 'cleanup', 'mess', 'farm', 'organic', 'fresh','trails', 'footprints','picnic', 'backyard','barren','ground'],
    trainer: ['waist', 'physical', 'coach', 'manager', 'instructor', 'condition', 'horse', 'breeder', 'box', 'boxer', 'teacher',
    'gym', 'pokemon', 'sneaker', 'fitness', 'improvement', 'improve', 'pet', 'dog', 'cat', 'workout', 'partner', 'strength',
    'stamina', 'bodybuilder', 'expert', 'program', 'person', 'exercise', 'mentor', 'teammate', 'educate', 'educator', 'sports',
    'sport', 'rookie', 'beginner', 'teach', 'learn', 'mastery', 'pedagogy', 'instruction', 'education', 'guide', 'guidance', 'growth', 
    'performance', 'development', 'progress', 'office', 'diet', 'organic', 'nutrition', 'appointment','membership','metabolism'],
    relationship: ['friendship', 'dating', 'date', 'partner', 'partnership', 'ties', 'affair', 'assocation', 'state',
    'family', 'brother', 'sister', 'friends', 'friend', 'feelings', 'significant', 'future', 'boundaries', 'sex', 'emotion', 'emotional',
    'breakup', 'loss', 'trust', 'rift', 'break', 'couple', 'history', 'child', 'parent', 'dynamic', 'tied', 'pair', 'drama', 'close', 'adult',
    'association', 'interdependence', 'interconnection', 'commitement', 'communication', 'teamwork', 'balance', 'date', 'meetup',
    'cheating','psychology'],
    beer: ['wine', 'drinks', 'drink', 'beverage', 'wheat', 'brew', 'suds', 'brewery', 'pubs', 'pub', 'pint', 'liver', 'glass', 'bottle',
    'micro', 'drunk', 'piss', 'party', 'drug', 'abuse', 'oktoberfest', 'adult', 'money', 'bar', 'ingest', 'sip', 'bartender', 'consume',
    'brewing', 'fermentation','aficionado', 'craft', 'tasting', 'blend', 'aroma', 'tap', 'cheers', 'shipment', 'delivery','hungover','purchase' ],
    knowledge: ['information', 'skills', 'expertise', 'expert', 'learn', 'learning', 'aware', 'awareness', 'process', 'power', 'wisdom',
    'insight', 'mind', 'think', 'understand', 'subject', 'memory', 'possess', 'background', 'perspective', 'data', 'head', 'curiosity', 
    'curious', 'books', 'study', 'school', 'concept', 'concepts','philomath', 'intellect', 'smart', 'mastery', 'application', 'apply', 'cognition',
    'understanding', 'epistemology', 'scholar', 'research', 'study', 'library', 'dumb','economics','doctor'],
    improvement: ['better', 'change', 'develop', 'development', 'upgrade', 'renovation', 'renovate', 'progress', 'adjust', 'reform',
    'repair', 'growth', 'grow', 'different', 'difference', 'increase', 'self', 'help', 'fix', 'work', 'practice', 'boost', 'innovation',
    'feedback', 'benefit', 'health', 'time', 'house', 'restoration', 'restore', 'optimization', 'optimize', 'enhancement', 'enhance', 'refine', 
    'refinement', 'gourmet', 'diet', 'nutrition', 'milestone','wisdom'],
    resolution: ['quality', 'camera', 'photo', 'declaration', 'determined', 'determination', 'decision', 'document', 'proposal', 'decision',
    'compromise', 'answer', 'solve', 'purpose', 'graphics', 'performance', 'rate', 'conflict', 'monitor', 'screen', 'closure', 'display', 
    'image', 'color', 'sharp', 'low', 'video', 'poor', 'contrast', 'computer', 'pact', 'debate', 'speech', 'solution', 'settlement', 'conclusion',
    'computer', 'plan','blurry'],
    payment: ['credit', 'debit', 'check', 'cash', 'refund', 'money', 'receipt', 'installment', 'salary', 'fee', 'bonus', 'premium', 'royalty',
    'incentive', 'amount', 'costs', 'cost', 'shipping', 'down', 'bank', 'donation', 'bill', 'charge', 'employer', 'car', 'processing', 
    'receivable', 'sale', 'direct', 'funds', 'tips', 'gratuity', 'overdue', 'tuition', 'missed', 'wallet', 'cards', 'compensation', 'compensate', 
    'exchange', 'remuneration', 'transaction', 'invoice', 'settlement', 'payroll', 'billing', 'bill', 'tab','gift','treat','sacrifice'],
    customer: ['transaction', 'client', 'exchange', 'use', 'retail', 'shop', 'shopper', 'vendor', 'goods', 'food', 'service', 'buyer',
    'hospitality', 'person', 'store', 'order', 'returns', 'associate', 'products', 'consumer', 'patron', 'visitor', 'satisfaction', 
    'experience', 'feedback','money','premium'],
    charity: ['foundation', 'money', 'donation', 'donations', 'gift', 'marketing', 'donate', 'organization', 'philanthropy', 'fundraiser', 
    'fundraising', 'handout', 'fund', 'funds', 'taxes', 'tax', 'orphans', 'orphan', 'institution', 'help', 'giveaway', 'donor', 'celebrities',
    'offering', 'benefit', 'aid', 'nonprofit', 'service', 'kindness', 'kind', 'care', 'rescue', 'poor', 'event', 'events', 'children', 'child',
    'contribution', 'contributions', 'altruism', 'benefaction', 'generous', 'generosity', 'support', 'impact', 'volunteer', 'food'],
    failure: ['success', 'loss', 'lose', 'inability', 'flop', 'lack', 'collapse', 'error', 'malfunction', 'problem', 'problems', 'flunk', 
    'defeat', 'miscalculation', 'system', 'bad', 'learn', 'shame', 'result', 'pain', 'bugs', 'glitch', 'crash', 'avoid', 'threat', 'doubt', 
    'unsuccessful', 'blunder', 'blooper', 'unfortunate', 'disappoint', 'disappointed', 'wrong', 'risk', 'challenge', 'experiment', 'hypothesis',
    'lesson', 'experience', 'flaw', 'burnt', 'spoiled','no-show','collapse'],
    initiative: ['project', 'effort', 'program', 'combat', 'petition', 'first', 'plan', 'steps', 'action', 'leadership', 'strategy', 'policy', 
    'pledge', 'momentum', 'create', 'fight', 'energy', 'idea', 'campaign', 'education', 'vision', 'measure', 'begin', 'fund', 'blueprint', 
    'promises', 'promise', 'develop', 'enterprise', 'innovation', 'venture', 'impact', 'cookbook','surprise'],
    bonus: ['incentive', 'salary', 'reward', 'premium', 'raise', 'extra', 'commission', 'package', 'winnings', 'win', 'signing', 'package', 
    'prize', 'prizes', 'cost', 'gift', 'benefit', 'wage', 'boost', 'award', 'offer', 'office', 'paid', 'money', 'compensate', 'promotion', 
    'promotional', 'yearly', 'annual', 'earn', 'merit', 'compensation', 'perk', 'treat', 'dessert'],
    judgment: ['opinion', 'validation', 'decision', 'verdict', 'justice', 'court', 'jury', 'law', 'ruling', 'gossip', 'estimate', 'estimation',
    'mind', 'final', 'sound', 'guilty', 'innocent', 'critique', 'feel', 'fear', 'intuition', 'guilt', 'moral', 'characterization', 'correct', 
    'sentence', 'assessment', 'evaluation', 'analysis', 'conclusion', 'review', 'palate','stares'],
    requirement: ['necessity', 'ratio', 'necessary', 'prerequisite', 'need', 'essential', 'must', 'obligation', 'mandatory', 'responsibility',
    'demand', 'guideline', 'guidelines', 'minimum', 'limit', 'limitation', 'mandate', 'standard', 'standards', 'rules', 'threshold', 'clause', 
    'qualification', 'qualifications', 'condition', 'measure', 'fulfill', 'criteria', 'stipulation', 'needs', 'job', 'basic', 'specification', 
    'criterion', 'compliance', 'provision'],
    chest: [ 'neck','heart','plate', 'torso', 'back', 'lungs', 'lung', 'breast', 'body', 'box', 'treasure', 'cavity', 'trunk', 'compartment', 
    'loot', 'pirate', 'key', 'skin', 'anatomy', 'wound', 'beat', 'muscle', 'grow', 'pectoral', 'toy', 'tool', 'vault', 'container', 
    'victory', 'reward', 'storage', 'full', 'belly', 'collapse','pacemaker'],
    personality: ['character', 'identity', 'attitude', 'trait', 'ego', 'individual', 'charisma', 'charm', 'self', 'demeanor', 'humor',
    'temperament', 'qualities', 'emotion', 'emotional', 'extrovert', 'introvert', 'extroverted', 'introverted', 'attribute', 'kind', 
    'mean', 'behavior', 'brain', 'celebrity', 'quirky', 'flirty', 'psychology', 'disposition', 'traits', 'profile', 'office', 'critique',
    'hospitality', 'celebrity','greed'],
    coffee: ['drinks', 'drink', 'beverage', 'caffeine', 'espresso', 'bean', 'iced', 'brew', 'cafe', 'consume', 'ingest', 'energy', 'sip', 
    'mug', 'decaf', 'cup', 'roast', 'shop', 'grow', 'breakfast', 'hot', 'cold', 'work', 'office', 'donuts', 'pot', 'table', 'morning', 
    'black', 'blend', 'aroma', 'focus', 'break', 'brunch', 'cafe','free'],
    wood: ['table', 'cabin', 'oak', 'lumber', 'maple', 'tree', 'bamboo', 'hard', 'material', 'furniture', 'logs', 'soil', 'twigs', 'cutting',
    'ply', 'trunk', 'pieces', 'sturdy', 'thick', 'house', 'floor', 'paper', 'trees', 'fire', 'camp', 'camping', 'forest', 'cherry', 'chips', 
    'termite', 'stove', 'stoves', 'splinter', 'timber', 'finish', 'home', 'mahogany', 'walnut', 'farm', 'campfire', 'smokehouse', 'grill',
    'pinata','cracking', 'splinter','oven','burn','swords','ship'],
    garbage: ['recycle', 'recycling', 'trash', 'waste', 'landfill', 'rubbish', 'sewage', 'compost', 'debris', 'junk', 'dump', 'dispose', 
    'disposal', 'bin', 'piles', 'bags', 'bag', 'can', 'cans', 'curbside', 'sanitation', 'smell', 'filth', 'clean', 'crap', 'janitor',
    'truck', 'stink', 'throw', 'toss','pollution', 'rubbish', 'conjecture', 'mess', 'clutter', 'leftover', 'scrap'],
    response: ['reaction', 'answer', 'reply', 'feedback', 'retort', 'statement', 'comeback', 'counter', 'result', 'rebuttal', 'comment',
    'question', 'post', 'behavior', 'action', 'provoke', 'apology', 'opinion', 'alert', 'excuse', 'interaction', 'email', 'message', 
    'speech', 'clear', 'negative', 'positive', 'reflex', 'assertion', 'postulate', 'impact', 'review', 'commentary'],
    imagination: ['creativity', 'creative', 'mind', 'vision', 'imagery', 'fantasy', 'inspiration', 'child', 'children', 'dream', 
    'curiousity', 'thoughts', 'thought', 'think', 'thinking', 'passion', 'skill', 'brain', 'head', 'idea', 'reality', 'visionary', 
    'instinct', 'story', 'fiction', 'magic', 'conception', 'speculation', 'concept', 'ideation', 'innovation', 'creation', 'daydream',
    'fusion', 'epicurean','galaxy','limerence'],
    marriage: ['wedding', 'divorce', 'family', 'spouse', 'union', 'civil', 'dating', 'partner', 'partnership', 'commitment', 'couple',
    'ceremony', 'engagement', 'proposal', 'arranged', 'contract', 'happy', 'broken', 'kiss', 'ring', 'legal', 'annulment', 'intimate', 
    'intimacy', 'bond', 'children','beach', 'journey', 'organization', 'fusion', 'reception', 'banquet','suit','dress','cheating','polygamy'],
    excitement: ['joy', 'hype', 'anxiety', 'thrill', 'anticipation', 'euphoria', 'passion', 'frenzy', 'happy', 'happiness', 'interest', 
    'feeling', 'feel', 'fun', 'delight', 'drama', 'adrenaline', 'surprise', 'danger', 'pleasure', 'emotion', 'smile', 'reaction', 
    'discovery', 'breakthrough', 'epiphany', 'innovation', 'victory','dopamine', 'achievement', 'success', 'feast', 'festival', 'gala'],
    resource: ['support', 'time','water', 'natural', 'human', 'sustain', 'sustainability', 'funds', 'fund', 'funding', 'oil', 'power', 'energy',
    'commodity', 'minerals', 'asset', 'assests', 'provide', 'valuable', 'vital', 'allocate', 'allocation', 'approach', 'framework', 'tool',
    'utilization', 'capability', 'ingredients', 'harvest', 'depot','abundant'],
    pupil: ['iris', 'teacher', 'student', 'eye', 'school', 'students', 'education', 'class', 'mentor', 'learn', 'see', 'vision', 'eyes', 
    'optics', 'optical', 'dilate', 'dilation', 'uniform', 'ophthalmology', 'iridology', 'learning', 'classroom', 'mastery', 'progression',
    'insight', 'assignment', 'lunchbox', 'sous', 'homeroom','dilation','soldier','knights'],
    weather: ['climate', 'snow', 'wind', 'rain', 'storm', 'sun', 'winter', 'fall', 'atmosphere', 'cold', 'hot', 'air', 'temperature', 
    'bad', 'news', 'forecast','pollution', 'proof','tsunami', 'nature', 'natural', 'spring', 'summer', 'person', 'visibility', 'travel', 'sky', 'meteorology',
    'pattern', 'season', 'thermostat', 'farm', 'barbecue', 'picnic', 'patio', 'crisis','hurricane'],
    dragon: ['wind','order', 'fire','burn', 'lizard', 'fly', 'flight', 'wings','throne', 'beast', 'creature', 'legend', 'magic', 'magical', 'knights', 'kings', 
    'dungeon', 'mythical', 'big', 'scales', 'tail', 'egg', 'sky', 'treasure', 'large', 'lord', 'mythology', 'fantasy', 'folklore', 'death',
    'adventure','myth', 'quest', 'scroll','smoke','swords', 'hoard','lochness', 'feast', 'roast', 'landing', 'land','tales','tails','green'],
    ocean: ['big','pollution', 'sea', 'vast', 'water', 'beach','lochness', 'shore', 'salt', 'waves', 'blue', 'creatures', 'whale', 'fish', 'mermaid', 'currents', 
    'boat', 'ship', 'travel', 'floor', 'eyes', 'world', 'large', 'fear', 'shark', 'moon', 'current', 'depth', 'wave', 'tide', 'voyage',
    'maritime','battleship', 'navigation','cannons','marine', 'wrecks', 'horizon', 'exploration', 'nautical', 'litter', 'discovery', 'seafood', 'shipment', 'port','cruise','yacht',
    'tsunami','hurricane','beach','pollution','treasure'],
    war: ['wounds', 'wound','human', 'military', 'fight', 'combat', 'battle', 'conflict', 'struggle', 'peace', 'invasion', 'weapon', 'death', 'crisis', 
    'campaign', 'civil', 'world', 'strategy', 'zone', 'nuclear', 'cold', 'machine', 'violence', 'win', 'lose', 'declare', 'anti', 'army', 
    'soldier', 'lord', 'aftermath', 'destruction', 'prisoner', 'art', 'tactics', 'tactic', 'doctrine', 'victory', 'defeat', 'blueprint',
    'ration', 'mess', 'frontline', 'deployment', 'swords','ship','invasion','gathering','funding','marine','fair','battleship','cannons','knights','throne']
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
let allClueWords
let allClues
let winningsClues
let board
let message
let clues = []
let count = []
let pickedCard = []


/*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll(".card")
const messageEl = document.querySelector("#message")
const playAgainBtn = document.getElementById("reset")
const helpSpyBtn = document.getElementById("help")
const countdownEl = document.getElementById("countdown")
const choiceOne = document.getElementById('#one')
const choiceTwo = document.getElementById('#two')
const choiceThree = document.getElementById('#three')




/*-------------------------------- Functions --------------------------------*/

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
    let allWinningClues = winningClueWords.flat()
}

function groupBClueWords() {
    bystanderWords.forEach((bystanderWord) => {
        if (Object.keys(wordPool).includes(bystanderWord)) {
              bystanderClueWords.push(wordPool[bystanderWord])
        }
    })
    let allBystanderClues = bystanderClueWords.flat()
}

function groupAClueWords() {
    assassinWords.forEach((assassinWord) => {
        if (Object.keys(wordPool).includes(assassinWord)) {
               assassinClueWords.push(wordPool[assassinWord])
        }
    })
}

function cluesDisplayed() {
    for (i = 0; i < allWinningClues.length; i++) {
        let randomIndex = Math.floor(Math.random() * allWinningClues.length)
        if (!assassinClueWords.includes(allWinningClues[randomIndex]) && !allBystanderClues.includes(allWinningClues[randomIndex])) {
             clues.push(allWinningClues[randomIndex])
        }
    }

    const count = {}
        clues.forEach((word) => {
            if (count[word]) {
                count[word] += 1
            } else {
                count[word] = 1
            }
        })
       
    let randomIndex = Math.floor(Math.random() * clues.length)
        if (Object.keys(count).includes(clues[randomIndex])) {
            console.log(`Clue: ${clues[randomIndex]}, Words to be Guessed: ${count[clues[randomIndex]]}`)
         }
}

    function getPickedCard(event) {
     pickedCard = event.target.id
     let message = ''
     console.log(pickedCard);
    }

    if (assassinWords.includes(pickedCard)) {
     message = `Unfortunately ${'click'} is the Assassin Card. Game Over!`
    } else if (bystanderWords.includes(pickedCard)) {
     message = `Ooh! ${'click'} is a Bystander Card. Round Over! Next Clue`
    } else if (winningWords.includes(pickedCard)) {
     message = `${'click'} is right! Great Job!`
    }
        

    cardEls.forEach((card, idx) => {
        cardEls[idx].textContent = wordsUsedGame[idx]
        cardEls[idx].addEventListener('click',getPickedCard)
    });

    const play = (event) => {
        pullWords(wordPool)
        assignWords()
        groupWClueWords()
        groupBClueWords()
        groupAClueWords()
        cluesDisplayed()
    }
    console.log(clues);
    play()
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

// console.log()
// const cardAction = () => {}
// const help = () => {}
// const render = () => {}
// const play = () => {}




/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector('#0').addEventListener('click', cardAction)
// document.querySelector('#1').addEventListener('click', cardAction)
// document.querySelector('#2').addEventListener('click', cardAction)
// document.querySelector('#3').addEventListener('click', cardAction)
// document.querySelector('#4').addEventListener('click', cardAction)
// document.querySelector('#5').addEventListener('click', cardAction)
// document.querySelector('#6').addEventListener('click', cardAction)
// document.querySelector('#7').addEventListener('click', cardAction)
// document.querySelector('#8').addEventListener('click', cardAction)
// document.querySelector('#9').addEventListener('click', cardAction)
// document.querySelector('#10').addEventListener('click', cardAction)
// document.querySelector('#11').addEventListener('click', cardAction)
// document.querySelector('#12').addEventListener('click', cardAction)
// document.querySelector('#13').addEventListener('click', cardAction)
// document.querySelector('#14').addEventListener('click', cardAction)
// document.querySelector('#15').addEventListener('click', cardAction)
// document.querySelector('start').addEventListener('click', play)
// document.querySelector('help').addEventListener('click', help)
