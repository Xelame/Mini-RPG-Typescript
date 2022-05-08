export default interface ManaUser {
    currentMana: number;
    maxMana: number;
    gainMana(percent : number): void;
}