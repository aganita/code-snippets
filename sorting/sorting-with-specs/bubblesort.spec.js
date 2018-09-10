describe('Bubble Sort', function(){

	beforeEach(function(){
	//    spyOn(Object, 'create').and.callThrough();
		//var n = 0;
	});

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles single item', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles array with length more than 1', function(){
        expect( bubbleSort([22, 2, 5, 10, 11, 7, 8]) ).toEqual( [2, 5, 7, 8, 10, 11, 22] );
    });

    it('handles array with length more than 1: try 2', function(){
    	spyOn(window, 'compare').and.callThrough();
        expect( bubbleSort([6, 9, 3, 2, 0, 5]) ).toEqual( [0, 2, 3, 5, 6, 9] );
      	console.log("compare count = " + compare.calls.count());
    });  

  
});

