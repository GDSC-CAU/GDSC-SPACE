export const BlogHeader = ({ type }: { type: string }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-7 text-center md:mt-10 md:flex-row md:gap-10 md:text-left">
            <h1 className="font-eng text-5xl font-bold text-white md:text-6xl">{type} Blog</h1>
            <div className="flex flex-col gap-2">
                <p className="text-base/normal">
                    GDSC CAU 개발자와 디자이너의 작업 과정과
                    <br className="md:hidden" />
                    결과물을 공유하는 공간입니다.
                </p>
                <p className="text-base/normal">
                    어떻게 프로젝트를 시작하게 되었고,
                    <br className="md:hidden" /> 진행하면서 느낀 개발자와 디자이너의
                    <br className="md:hidden" /> 생생한 스토리를 직접 확인해보세요!
                </p>
            </div>
        </div>
    )
}
