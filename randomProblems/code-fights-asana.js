function htmlToLuna(html) {
    html = html.substring(1, html.length-1);
    var tagArray = html.split('><'),
        stack = [],
        resString = '',
        top,
        bufferArray = [];
    
    tagArray.forEach(function(tag){
        if (!isClosing(tag)){
            addToStack(tag, stack);
        } else {         
            top = stack.pop();
            while('/'+top !== tag){
                bufferArray.push(top);
                top = stack.pop();   
            }
            addToStack(tag, stack, bufferArray);
            bufferArray = [];
        }
    });
    
    return stack.join('');
}

function isClosing(tag){
    return (tag.charAt(0) === '/');
}

function addToStack(tag, stack, bufferArray){
    var conversionMap = {
        'img /': 'IMG({})',
        '/b': 'B([',
        '/div': 'DIV([',
        '/p':'P(['
    };
    
    if (bufferArray){
        stack.push(conversionMap[tag] + bufferArray.reverse().join(', ') + '])');
        return;
    }
    if (tag === 'img /'){
        tag = conversionMap[tag];
    }
    stack.push(tag);
}

