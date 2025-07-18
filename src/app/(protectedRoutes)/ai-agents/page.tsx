import { getAllAssistants } from '@/actions/vapi'
import React from 'react'
import AiAgentSidebar from './_components/AiAgentSidebar'
import ModelSection from './_components/ModelSection'
import { Briefcase, UserCheck } from 'lucide-react'

const page = async () => {
  const allAgents = await getAllAssistants()

  return (
    <div className="w-full flex h-[80vh] bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900 rounded-3xl border border-emerald-200/30 dark:border-emerald-700/30 backdrop-blur-sm overflow-hidden shadow-lg relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20">
          <Briefcase className="w-16 h-16 text-emerald-600 rotate-12" />
        </div>
        <div className="absolute top-40 right-32">
          <UserCheck className="w-12 h-12 text-teal-600 -rotate-12" />
        </div>
      </div>
      
      <AiAgentSidebar aiAgents={allAgents?.data || []} />
      <div className="flex-1 flex flex-col bg-emerald-50/30 dark:bg-emerald-900/20 backdrop-blur-sm relative z-10">
        <ModelSection />
      </div>
    </div>
  )
}

export default page
