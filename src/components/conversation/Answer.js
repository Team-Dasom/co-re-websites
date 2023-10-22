export default function Answer({ data }) {
  const { text } = data;
  return (
    <div className='p-4 justify-center text-base md:gap-6 md:py-6 m-auto border-b border-solid border-[#B5B2B2]'>
      <div className='flex flex-1 gap-4 text-base mx-auto md:gap-6 gizmo:gap-3 gizmo:md:px-5 gizmo:lg:px-1 gizmo:xl:px-5 md:max-w-2xl lg:max-w-[38rem] gizmo:md:max-w-3xl gizmo:lg:max-w-[40rem] gizmo:xl:max-w-[48rem] xl:max-w-3xl }'>
        <div className='relative flex flex-col items-end flex-shrink-0'>
          <div>
            <div className='relative flex'>
              <div className='bg-black w-9 h-9'></div>
            </div>
          </div>
        </div>
        <div className='min-h-[20px] flex flex-col items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto'>
          <div>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
