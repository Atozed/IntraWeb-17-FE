namespace Image_Gallery {
  export class Index extends IndexGen {
    public readonly Photos!: IntraWeb.Controls.ArrayItems.Page.Data;

    WhenPrevButtonClicked() { 
      if (!this.Photos.Dataset.MovePrior()) {
        this.Photos.Dataset.MoveLast()
      } 
    }

    WhenNextButtonClicked() { 
      if (!this.Photos.Dataset.MoveNext()) {
        this.Photos.Dataset.MoveFirst()
      } 
    }

    WhenPhotoLikeClicked() { 
      // this.PhotoLike.IsLiked.Value = !this.PhotoLike.IsLiked.Value;
      const xRow = this.Photos.Dataset.Row;

      xRow.liked = !xRow.liked;
    }    
  }
}
