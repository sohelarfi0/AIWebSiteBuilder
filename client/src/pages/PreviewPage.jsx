import React, { useState, useEffect} from 'react'
import {Loading} from '../components/Loading'
import {AlertCircleIcon} from '@lucid-react'
import api from '../utils/api'
import FullPagePreviw from '../components/FullPagePreview'
import {useAppContext} from '../context/AppContext'
import {useParams} from 'react-router-dom'
import {Loading} from '../components/Loading'


const PreviewPage = () => {

  const {id} = useParams()
  const {activeProject: project, loadingActiveProject: loading, loadProject} = useAppContext()



  useEffect(()=>{
    if(id){
      loadProject(id)
    }
    
  },[id])


  if(loading || !project){
    return  <Loading />

  }



  return (
    <FullPagePreviw files={project.files} />
  )
}

export default PreviewPage