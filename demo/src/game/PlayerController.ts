class PlayerController extends Component {
    private down: boolean = false;
    private touchPoint: Vector2 = Vector2.zero;

    public onAddedToEntity(){
        this.entity.scene.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.entity.scene.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchBegin, this);
        this.entity.scene.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    }

    private touchBegin(evt: egret.TouchEvent){
        this.down = true;
        this.touchPoint = new Vector2(evt.stageX, evt.stageY);
    }

    private touchEnd(evt: egret.TouchEvent){
        this.down = false;
        this.touchPoint = new Vector2(evt.stageX, evt.stageY);
    }

    public update(){
        if (this.down){
            let camera = SceneManager.getActiveScene().camera;
            let worldVec = camera.screenToWorldPoint(this.touchPoint);
            console.log(worldVec, camera.transform.position);
            camera.transform.position = Vector2.lerp(camera.transform.position, worldVec, Time.deltaTime);
        }
    }
}