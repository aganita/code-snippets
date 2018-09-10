describe('Merge Sort', function(){

	beforeEach(function(){
	//    spyOn(Object, 'create').and.callThrough();
		//var n = 0;
	});

    it('Split Odd length Array into two halfs', function(){
        expect( split([22, 2, 5, 10, 11, 7, 8]) ).toEqual([[22, 2, 5, 10], [11, 7, 8]]);
    });

    it('Split Even length Array into two halfs', function(){
        expect( split([22, 2, 5, 10, 11, 7]) ).toEqual([[22, 2, 5], [10, 11, 7]]);
    });


    it('Merge will return one sorted array from two input arrays', function(){
        expect( merge([2, 7, 8, 10], [5, 11, 22]) ).toEqual( [2, 5, 7, 8, 10, 11, 22] );
    });

    it('handles single item', function(){
        expect( mergeSort([1]) ).toEqual( [1] );
    });

    it('handles array with length more than 1', function(){
        expect( mergeSort([22, 2, 5, 10, 11, 7, 8]) ).toEqual( [2, 5, 7, 8, 10, 11, 22] );
    });

    it('handles array with length more than 1: try 2', function(){
    	spyOn(window, 'mergeSort').and.callThrough();
        expect( mergeSort([6, 9, 3, 2, 0, 5]) ).toEqual( [0, 2, 3, 5, 6, 9] );
     console.log("mergeSort count = " + mergeSort.calls.count());
    });  

  
});
