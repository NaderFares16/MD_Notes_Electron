import { Content, RootLayout, SideBar } from '@/components'

function App() {
  return (
    <RootLayout>
      <SideBar className="p-2 border-4 border-red-500">Sidebar</SideBar>
      <Content className="border-4 border-blue-500">Content</Content>
    </RootLayout>
  )
}

export default App
