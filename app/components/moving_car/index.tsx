import styles2 from './animation.module.css'
const MovingCar = () =>{
    return(
        
        <div className={styles2.wrapper}>
                
                <div className={styles2.house_inner_container}>
                    <div className={styles2.overlay_shadow}></div>
                    <div className={styles2.tree}>
                        <div className={styles2.tree_top}>
                        </div>
                        <div className={styles2.tree_shadow}>
                        </div>
                    </div>
                    <div className={styles2.house_one}>
                        <div className={styles2.house_roof}>
                        </div>
                        <div className={styles2.first_level_window_left}>
                            <div className={styles2.windowsill}>
                            </div>
                        </div>
                        <div className={styles2.first_level_window_right}>
                            <div className={styles2.window_half_closed}>
                            </div>
                            <div className={styles2.windowsill}>
                            </div>
                        </div>
                        <div className={styles2.door}>
                            <div className={styles2.door_inner}>
                                <div className={styles2.door_inner_2x}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles2.store_one}>
                        <div className={styles2.overlay_shadow_two}></div>
                        <div className={styles2.school_flag_post}></div>
                        <div className={styles2.school_flag}></div>
                        <div className={styles2.roof}></div>
                        <div className={styles2.door}>
                            <div className={styles2.door_shadow}></div>
                            <div className={styles2.sign_holder}></div>
                            <div className={styles2.door_sign}>
                                <span>OT's</span>
                            </div>
                        </div>
                        <div className={styles2.store_window_left}>
                            <div className={styles2.window_divider}></div>
                            <div className={styles2.store_window_shadow}></div>
                        </div>
                    </div>
                    <div className={styles2.moon}></div>
                    <div className={styles2.mountain}></div>
                    <div className={styles2.long_shadow}></div>

                    <div className={styles2.car}>
                        <div className={styles2.car_base}></div>
                        <div className={styles2.car_wheel_one}></div>
                        <div className={styles2.car_wheel_two}></div>
                        <div className={styles2.car_roof}>
                            <div className={styles2.car_roof_inner}>
                                <div className={styles2.car_roof_seperator}></div>
                            </div>
                        </div>
                        <div className={styles2.car_light}></div>
                    </div>
                    <div className={styles2.house_development_platform}>
                    </div>
                </div>
        </div>

    )
}
export default MovingCar;