import React from 'react'

const Footer = () => {
  return (
    <footer className="container mx-auto bg-white border-t border-gray-400">
      <div className="container flex p-3 ">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2 ">
            <div className="px-3 md:px-0">
              <h3 className="font-bold inline text-gray-900 text-center">Demo Only</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;