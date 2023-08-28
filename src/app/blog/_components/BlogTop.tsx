export const BlogTop = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-7 text-center md:mt-10 md:flex-row md:gap-10 md:text-left">
            <h1 className="font-eng text-5xl font-bold md:text-8xl">Blog</h1>
            <div className="flex flex-col gap-4 md:gap-3">
                <div className="font-kor text-base md:text-xl">
                    GDSC CAU 개발자와 디자이너의 작업 과정과 그 결과물을 공유하는 공간입니다.{' '}
                </div>
                <div className="font-kor text-base md:text-xl">
                    어떻게 프로젝트를 시작하게 됐고, 진행하면서 느낀 개발자와 디자이너의 생생한 스토리를 직접
                    확인해보세요!
                </div>
            </div>
        </div>
    )
}
