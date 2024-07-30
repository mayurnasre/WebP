var flexContainer = document.createElement('div');
    flexContainer.id = 'flex-container';
    flexContainer.style.display = 'flex';
    flexContainer.style.flexWrap = 'wrap';
    flexContainer.style.gap = '10px';
    document.body.appendChild(flexContainer);

    // Add Entities inside Flex Container
    var quotes = [
         'Your time is limited, dont waste it living someone elses life. - Steve Jobs',
        'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill ' ,
        'The best way to predict the future is to invent it. - Alan Kay',
        '"I have not failed. I have just found 10000 ways that wont work." - Thomas Edison',
         'The only way to do great work is to love what you do. - Steve Jobs',
         'If opportunity doesn’t knock, build a door. - Milton Berle',
         '"Hardships often prepare ordinary people for an extraordinary destiny." - C.S. Lewis',
        '"Dont watch the clock; do what it does. Keep going." - Sam Levenson',
        '"Act as if what you do makes a difference. It does." - William James',
        '"What you get by achieving your goals is not as important as what you become by achieving your goals." - Zig Ziglar',
        '"The only place where success comes before work is in the dictionary." - Vidal Sassoon',
        '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
         '"Do not go where the path may lead, go instead where there is no path and leave a trail." - Ralph Waldo Emerson',
         '"Believe you can and youre halfway there." - Theodore Roosevelt',
         '"The only way to do great work is to love what you do." - Steve Jobs'
         
    ];

    for (var i = 1; i <= 15; i++) {
        var entity = document.createElement('div');
        entity.className = 'flex-item';
        entity.style.flex = '1 1 30%';
        entity.style.border = '1px solid #ccc';
        entity.style.padding = '20px';
        entity.style.boxSizing = 'border-box';
        entity.style.backgroundColor="pink";
        entity.style.fontSize="28px"
        
        // Add quote
        var quote = document.createElement('blockquote');
        quote.innerHTML = quotes[i - 1];
        
        // Append quote to entity
        entity.appendChild(quote);
        
        flexContainer.appendChild(entity);
    }