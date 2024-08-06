import React, {  useEffect, useState } from 'react';
import { Canvas} from '@react-three/fiber';
import ModelContent from './model';

export default function Model({ data }) {
  const modelData = require('../../../data/models.json');
  const projectSlug = data.project.slug;

  const [loading, setLoading] = useState(true);
  const [foundModel, setFoundModel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const model = modelData.find(item => item.project === projectSlug);
        setFoundModel(model);
        setLoading(false);
      } catch (error) {
        console.error(`Error loading model: ${error.message}`);
        setLoading(false); // Set loading to false in case of an error to avoid indefinite loading
      }
    };

    fetchData();
  }, [projectSlug, modelData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!foundModel) {
    console.error(`Model not found for project slug: ${projectSlug}`);
    return <div>Error loading model</div>;
  }

  const { model } = foundModel;

  return (
    <Canvas
      style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: -1,top:0,left:0, background: '#CCEFFA'}}
      camera={{ position: [0, 0, 10], fov: 75 }}
      
    >
      <ModelContent model={model} />
    </Canvas>
  );
}


