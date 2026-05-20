// 010_pagination_helper solution.ts

/* 
 For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
helper.pageCount() // should == 2
helper.itemCount() // should == 6
helper.pageItemCount(0) // should == 4
helper.pageItemCount(1) // last page - should == 2
helper.pageItemCount(2) // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5) // should == 1 (zero based index)
helper.pageIndex(2) // should == 0
helper.pageIndex(20) // should == -1
helper.pageIndex(-10) // should == -1
*/

export class PaginationHelper {
  
  collection: unknown[];
  itemsPerPage: number;
  pageNumber: number = 0;

  public constructor(collection: unknown[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indices
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  public itemCount(): number {
    // Returns the number of items within the collection
    return this.collection.length;
  }

  public pageCount(): number {
    // Returns the number of pages
    this.pageNumber = Math.ceil(this.itemCount()/this.itemsPerPage);
    return this.pageNumber;
  }

  public pageItemCount(pageIndex: number): number {
    // Returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    // Empty arrays case
    if(this.collection.length == 0){
      return -1;
    }

    // Non empty array case
    const idxCriterion: number = this.collection.length - this.itemsPerPage*(pageIndex+1);
    if(idxCriterion >= 0) {
      return this.itemsPerPage;
    } else if((idxCriterion < 0) && (idxCriterion > -this.itemsPerPage)){
      return this.itemsPerPage + idxCriterion;
    } else {
      return -1;
    }
  }

  public pageIndex(itemIndex: number): number {
    // Determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    
    // Item index negative
    if(itemIndex < 0) {
      return -1;
    }

    // Empty arrays case
    if(this.collection.length == 0) {
      return -1;
    } else if ((this.collection.length != 0) && (itemIndex == 0)) {
      return 0;
    }

    // Non empty array case
    if(itemIndex <= this.collection.length){
      return Math.ceil(itemIndex/this.itemsPerPage)-1;
    } else {
      return -1;
    }
  }

}
