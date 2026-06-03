import {
  Phone,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Wifi,
  Signal,
  Battery,
  BatteryCharging,
  Image,
  Camera,
  Bell,
  Settings,
  User,
  Home,
  Mail,
  Clock,
  Calendar,
  Search,
  X,
  Check,
  AlertCircle,
  Info,
  Database,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  FileText,
  Code,
  Brain,
  Microscope,
  Cpu,
  Network,
  Download,
  Upload,
  Share2,
  BookOpen,
  GraduationCap
} from "lucide-react";

interface IconGroupProps {
  title: string;
  icons: Array<{ icon: React.ReactNode; name: string }>;
}

function IconGroup({ title, icons }: IconGroupProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm">{title}</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 p-3 rounded-none hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] transition-colors">
            <div className="text-[#000000] dark:text-white">
              {item.icon}
            </div>
            <span className="text-[10px] text-[#666666] text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IconComponents() {
  const navigationIcons = [
    { icon: <ArrowUp className="w-6 h-6" />, name: "Up" },
    { icon: <ArrowDown className="w-6 h-6" />, name: "Down" },
    { icon: <ArrowLeft className="w-6 h-6" />, name: "Left" },
    { icon: <ArrowRight className="w-6 h-6" />, name: "Right" },
    { icon: <Home className="w-6 h-6" />, name: "Home" },
    { icon: <Search className="w-6 h-6" />, name: "Search" },
  ];

  const dataIcons = [
    { icon: <Database className="w-6 h-6" />, name: "Database" },
    { icon: <BarChart3 className="w-6 h-6" />, name: "Bar Chart" },
    { icon: <LineChart className="w-6 h-6" />, name: "Line Chart" },
    { icon: <PieChart className="w-6 h-6" />, name: "Pie Chart" },
    { icon: <TrendingUp className="w-6 h-6" />, name: "Trending" },
    { icon: <Network className="w-6 h-6" />, name: "Network" },
  ];

  const researchIcons = [
    { icon: <Brain className="w-6 h-6" />, name: "AI/ML" },
    { icon: <Microscope className="w-6 h-6" />, name: "Research" },
    { icon: <Code className="w-6 h-6" />, name: "Code" },
    { icon: <Cpu className="w-6 h-6" />, name: "Computing" },
    { icon: <FileText className="w-6 h-6" />, name: "Document" },
  ];

  const educationIcons = [
    { icon: <GraduationCap className="w-6 h-6" />, name: "Education" },
    { icon: <BookOpen className="w-6 h-6" />, name: "Learning" },
  ];

  const communicationIcons = [
    { icon: <Mail className="w-6 h-6" />, name: "Email" },
    { icon: <Phone className="w-6 h-6" />, name: "Phone" },
    { icon: <Bell className="w-6 h-6" />, name: "Notification" },
    { icon: <Share2 className="w-6 h-6" />, name: "Share" },
  ];

  const interfaceIcons = [
    { icon: <User className="w-6 h-6" />, name: "User" },
    { icon: <Settings className="w-6 h-6" />, name: "Settings" },
    { icon: <Clock className="w-6 h-6" />, name: "Clock" },
    { icon: <Calendar className="w-6 h-6" />, name: "Calendar" },
    { icon: <Download className="w-6 h-6" />, name: "Download" },
    { icon: <Upload className="w-6 h-6" />, name: "Upload" },
  ];

  const actionIcons = [
    { icon: <Check className="w-6 h-6" />, name: "Confirm" },
    { icon: <X className="w-6 h-6" />, name: "Close" },
    { icon: <AlertCircle className="w-6 h-6" />, name: "Alert" },
    { icon: <Info className="w-6 h-6" />, name: "Info" },
  ];

  const systemIcons = [
    { icon: <Wifi className="w-6 h-6" />, name: "WiFi" },
    { icon: <Signal className="w-6 h-6" />, name: "Signal" },
    { icon: <Battery className="w-6 h-6" />, name: "Battery" },
    { icon: <BatteryCharging className="w-6 h-6" />, name: "Charging" },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="mb-2">6. Iconography</h2>
        <p className="text-sm text-[#666666]">Comprehensive icon library using Lucide React</p>
      </div>

      <div className="space-y-8">
        <IconGroup title="Navigation Icons" icons={navigationIcons} />
        <IconGroup title="Data & Analytics" icons={dataIcons} />
        <IconGroup title="Research & Development" icons={researchIcons} />
        <IconGroup title="Education" icons={educationIcons} />
        <IconGroup title="Communication" icons={communicationIcons} />
        <IconGroup title="Interface" icons={interfaceIcons} />
        <IconGroup title="Actions & Feedback" icons={actionIcons} />
        <IconGroup title="System Status" icons={systemIcons} />
      </div>

      {/* Size Variants */}
      <div className="space-y-3 pt-6 border-t-2 border-[#E5E5E5] dark:border-[#404040]">
        <div>
          <p className="text-sm font-semibold mb-1">Size Variants</p>
          <p className="text-xs text-[#666666]">Icon sizes for different use cases</p>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-3">
              <Database className="w-4 h-4 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666] block">16px<br/>Small</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-3">
              <Database className="w-5 h-5 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666] block">20px<br/>Default</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-3">
              <Database className="w-6 h-6 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666] block">24px<br/>Medium</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-3">
              <Database className="w-8 h-8 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666] block">32px<br/>Large</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <Database className="w-12 h-12 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666] block">48px<br/>XLarge</span>
          </div>
        </div>
      </div>

      {/* Color Variants */}
      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold mb-1">Color Variants</p>
          <p className="text-xs text-[#666666]">Brand color applications for icons</p>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#5461a6] dark:text-[#93c5fd]" />
            </div>
            <span className="text-[10px] text-[#666666]">Primary</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#5B7FBF]" />
            </div>
            <span className="text-[10px] text-[#666666]">Accent</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#2E3B5C]" />
            </div>
            <span className="text-[10px] text-[#666666]">Dark Blue</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#000000] dark:text-white" />
            </div>
            <span className="text-[10px] text-[#666666]">Dark</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#666666]" />
            </div>
            <span className="text-[10px] text-[#666666]">Medium</span>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-4">
              <BarChart3 className="w-6 h-6 mx-auto text-[#999999] dark:text-gray-400" />
            </div>
            <span className="text-[10px] text-[#666666]">Light</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6 mt-8">
        <h3 className="text-sm font-semibold mb-3 text-[#000000] dark:text-white">Icon Guidelines</h3>
        <ul className="text-sm space-y-2 text-[#666666]">
          <li>• Use 24px (w-6 h-6) as the default icon size for UI elements</li>
          <li>• Maintain consistent stroke width (2px) across all icons</li>
          <li>• Apply appropriate colors based on context and hierarchy</li>
          <li>• Ensure 44px minimum touch target when icons are interactive</li>
          <li>• Use icon + text labels for better accessibility and clarity</li>
          <li>• All icons from Lucide React library for consistency</li>
        </ul>
      </div>
    </section>
  );
}