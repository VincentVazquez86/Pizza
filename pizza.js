class pizza{
  //type constructor below
  constructor(s,mt,vt){
    this.size=s;
    this.meatToppings=mt;
    this.veggieToppings=vt;
  }
sizecost(){
if(this.size=="S"){
  return 7.99
}
if(this.size=="M"){
  return 9.99
}
if(this.size=="L"){
  return 12.99
}
if(this.size=="XL"){
  return 15.99
}
toppingcost(top){
  if(top=="meat"){
    return this.meatToppings.length*0.99;
  }
if(top=="veggie"){
  else if this.veggieToppings.length*0.50;
  }
}

Price(){
    return this.sizeCost()+this.toppingCost("meat")+this.toppingCost("veggie");
}    //type class functions below

static promotionalDeal (pizza,percent){
  percent = percent/100;
  var discount = pizza.price()*percent;
  return pizza.price() - discount;

}
