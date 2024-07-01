const About = () => {
  return (
    <>
    <div className='w-full h-screen overflow-hidden' style={{backgroundColor: '#EDEDED'}}>
      <div className='flex flex-col mt-108px'>
        <div className="flex flex-col h-screen w-full">
          <div className="h-fit mt-5">
            <div className='text-5xl font-extrabold my-8 mx-auto w-fit text-shadow-lg'>Who am I?</div>
          </div>
          <div className="rounded h-1 w-70p mx-auto border-black border-2"></div> 
          <div className="flex flex-1 h-screen mx-auto w-70p mt-12">
            <div className='h-screen w-3/6'>
              <div className='text-5xl font-black w-fit text-shadow-sm tracking-wide'>I am Christian Cabral</div>
              <div className='text-lg w-fit text-shadow-sm mt-2 text-justify overflow-hidden text-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula felis in enim semper vestibulum. In malesuada porta nisi nec fermentum. Fusce ullamcorper purus orci, placerat cursus sem fringilla placerat. Maecenas facilisis interdum felis, vel ornare nisi sollicitudin at. Duis a tortor urna. Integer viverra nunc ut lorem fringilla, eget sollicitudin nunc pretium. Pellentesque sagittis justo non risus dignissim, scelerisque tristique quam viverra. Praesent nibh sapien, porta in fermentum eget, sodales eu ante. Donec pharetra hendrerit neque, posuere lobortis lectus auctor in. Etiam tincidunt, metus eget suscipit bibendum, elit tellus aliquet nisl, tempor commodo lectus turpis et ante. Pellentesque eget sapien consectetur, tincidunt ex a, posuere ipsum.
              </div>
            </div>
            <div className='h-screen w-3/6'>
              <div className='relative h-32r w-32r resize-effect-2 cursor-pointer mx-auto overflow-hidden'>
                <div className='absolute bottom-0 right-0 h-90p w-90p' style={{backgroundColor: '#171717'}}></div>
                <div className='relative h-90p w-90p bg-temp-image bg-center bg-cover' ></div>
              </div>  
            </div>
          </div> 
        </div>
      </div>
    </div>
    </>
  )
};

export default About;