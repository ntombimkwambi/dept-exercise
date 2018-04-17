describe('grandTotal' , function(){
  it('should return the total of all the departments' , function(){
      assert.deepEqual(42543, grandTotal(depts));
  });
  it('should return the correct amount used for groceries ' , function(){
      assert.equal(dept('groceriesDept'), '11089');
  });

  it('should return the correct amount used for pharmacy' , function(){
      assert.equal(dept('pharmacyDept'),'7321' );
  });
  it('should return the correct amount used for bakery' , function(){
      assert.equal(dept('bakeryDept'),'10073' );
  });
  it('should return the correct amount used for butchery', function(){
      assert.equal(dept('butcheryDept'),'9053' );
  });

});
