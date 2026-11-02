namespace AdminLTE {
  // This is the intended method of mixing in generated classes.
  // They can be merged and in some demos are, but this method makes it far easier
  // on the generator during updates.
  export class Index extends IndexGen {
    public GuessButton!: IntraWeb.Controls.Button;
    public GuessEdit!: IntraWeb.Controls.Edit;

    public Count = 0;
    // Must init to a value so it has a type and exists.
    public Guess = NaN;
    public Msg = '';
    protected MagicNo = Math.floor((Math.random() * 100) + 1);

  }
}
