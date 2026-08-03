function Background() {
  return (
    <>
      
      <div className="fixed left-1/2 top-0 h-full w-px bg-neutral-200 -translate-x-1/2 pointer-events-none -z-10" />

      <div className="fixed left-[8%] top-0 h-full w-px bg-neutral-100 pointer-events-none -z-10" />

     
      <div className="fixed right-[8%] top-0 h-full w-px bg-neutral-100 pointer-events-none -z-10" />
    </>
  );
}

export default Background;