class Info {
  constructor(public info: string) { }
  getInfo() {
    return this.info;
  }
};

var info = new Info("System ready!");
console.log(info.getInfo());
