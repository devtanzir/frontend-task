import { ReactNode } from "react";

const Container = ({children}:{children: ReactNode}) => {
    return (
        <div className="container mx-auto w-full 2xl:w-[1304px] xl:w-[1240px] px-8 lg:px-4">
            {children}
        </div>
    );
};

export default Container;