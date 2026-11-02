namespace Vue.GUIs.Timer {
  export class Index extends IndexGen {
    Duration = 15000; DurationSec = '';
    Elapsed = 0; ElapsedSec = '';
    LastTime!: number;

    WhenPageReady() { this.WhenResetButtonClicked(); }

    WhenPageUpdate() { 
      this.DurationSec = (this.Duration / 1000).toFixed(1);
      this.ElapsedSec = (this.Elapsed / 1000).toFixed(1);
      this.Progress1.Value.Value = Math.min(this.Elapsed / this.Duration, 1);
    }

    WhenResetButtonClicked() {
      this.LastTime = performance.now();
      this.AnimationFrame();
    }

    AnimationFrame() {
      this.Elapsed = performance.now() - this.LastTime;
      if (this.Elapsed < this.Duration) {
        requestAnimationFrame(() => {
          this.AnimationFrame();
          this.Refresh();
        });
      }
    }
  }
}