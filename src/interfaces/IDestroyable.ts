export default interface IDestroyable {
    hp: number;
    getHit(hp: number): void;
}
