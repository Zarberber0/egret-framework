class Viewport {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;
    private _minDepth: number;
    private _maxDepth: number;
    
    public get aspectRatio(){
        if ((this._height != 0) && (this._width != 0))
            return (this._width / this._height);
        return 0;
    }

    public get bounds(){
        return new Rectangle(this._x, this._y, this._width, this._height);
    }
    public set bounds(value: Rectangle){
        this._x = value.x;
        this._y = value.y;
        this._width = value.width;
        this._height = value.height;
    }

    constructor(x: number, y: number, width: number, height: number){
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._minDepth = 0;
        this._maxDepth = 1;
    }
    
}