export class Select {
    name: any;
    isSelected: boolean;
    constructor(name: any, isSelected?: any) {
        this.name = name;
        this.isSelected = isSelected || false;
    }
}
