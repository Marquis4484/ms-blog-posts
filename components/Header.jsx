import React, { useState, useEffect } from 'react';
import MSBlogPost from '../public/MS-Blog-Posts-Logo-RD.png';
import { getCategories } from '../services';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    }); 
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <a href="/">
            <div className="box-border w-1/4 h-2">
                <Image src={MSBlogPost} alt="MS Blog Post"  />
            </div>          
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;