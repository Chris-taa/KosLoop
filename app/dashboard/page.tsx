"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ShoppingBag,
  Package,
  Heart,
  Star,
  TrendingUp,
  Wallet,
  Settings,
  Bell,
  Plus,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<"buyer" | "seller" | "admin">("buyer")

  const stats = {
    buyer: [
      { label: "Total Pembelian", value: "12", icon: ShoppingBag, color: "text-blue-600" },
      { label: "Produk Favorit", value: "8", icon: Heart, color: "text-red-600" },
      { label: "Review Diberikan", value: "10", icon: Star, color: "text-yellow-600" },
      { label: "Poin Reward", value: "150", icon: TrendingUp, color: "text-green-600" },
    ],
    seller: [
      { label: "Produk Aktif", value: "24", icon: Package, color: "text-blue-600" },
      { label: "Total Penjualan", value: "89", icon: ShoppingBag, color: "text-green-600" },
      { label: "Saldo", value: "Rp 2.450.000", icon: Wallet, color: "text-purple-600" },
      { label: "Rating", value: "4.8", icon: Star, color: "text-yellow-600" },
    ],
    admin: [
      { label: "Total Pengguna", value: "1,234", icon: ShoppingBag, color: "text-blue-600" },
      { label: "Produk Aktif", value: "5,678", icon: Package, color: "text-green-600" },
      { label: "Transaksi Hari Ini", value: "45", icon: TrendingUp, color: "text-purple-600" },
      { label: "Pendapatan", value: "Rp 12.5M", icon: Wallet, color: "text-yellow-600" },
    ],
  }

  const recentOrders = [
    {
      id: "ORD-001",
      product: "Buku Kalkulus Lengkap",
      buyer: "Ahmad Rizki",
      amount: "Rp 75.000",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      product: "Laptop Asus VivoBook",
      buyer: "Sari Dewi",
      amount: "Rp 4.500.000",
      status: "processing",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      product: "Meja Belajar Minimalis",
      buyer: "Budi Santoso",
      amount: "Rp 200.000",
      status: "shipped",
      date: "2024-01-13",
    },
  ]

  const myProducts = [
    {
      id: 1,
      title: "Buku Algoritma dan Struktur Data",
      price: "Rp 85.000",
      status: "active",
      views: 45,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Kalkulator Scientific Casio",
      price: "Rp 150.000",
      status: "sold",
      views: 23,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Lampu Meja LED",
      price: "Rp 75.000",
      status: "pending",
      views: 12,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "sold":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KL</span>
                </div>
                <span className="text-xl font-bold text-gray-900">KosLoop</span>
              </div>
              <Badge variant="outline">Dashboard</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Role Switcher (for demo) */}
        <div className="mb-6">
          <div className="flex space-x-2">
            <Button
              variant={userRole === "buyer" ? "default" : "outline"}
              onClick={() => setUserRole("buyer")}
              size="sm"
            >
              Pembeli
            </Button>
            <Button
              variant={userRole === "seller" ? "default" : "outline"}
              onClick={() => setUserRole("seller")}
              size="sm"
            >
              Penjual
            </Button>
            <Button
              variant={userRole === "admin" ? "default" : "outline"}
              onClick={() => setUserRole("admin")}
              size="sm"
            >
              Admin
            </Button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat datang, John Doe!</h1>
          <p className="text-gray-600">
            {userRole === "buyer" && "Kelola pembelian dan favorit Anda"}
            {userRole === "seller" && "Kelola toko dan produk Anda"}
            {userRole === "admin" && "Kelola platform KosLoop"}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats[userRole].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Ringkasan</TabsTrigger>
                {userRole === "seller" && <TabsTrigger value="products">Produk Saya</TabsTrigger>}
                {userRole === "buyer" && <TabsTrigger value="orders">Pesanan Saya</TabsTrigger>}
                {userRole === "admin" && <TabsTrigger value="management">Kelola</TabsTrigger>}
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Aktivitas Terbaru</CardTitle>
                    <CardDescription>
                      {userRole === "seller" && "Pesanan dan aktivitas toko Anda"}
                      {userRole === "buyer" && "Pembelian dan aktivitas Anda"}
                      {userRole === "admin" && "Aktivitas platform terbaru"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{order.product}</h4>
                            <p className="text-sm text-gray-600">
                              {userRole === "seller" ? `Pembeli: ${order.buyer}` : `Order ID: ${order.id}`}
                            </p>
                            <p className="text-xs text-gray-500">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{order.amount}</p>
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {userRole === "seller" && (
                <TabsContent value="products">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Produk Saya</CardTitle>
                        <CardDescription>Kelola semua produk yang Anda jual</CardDescription>
                      </div>
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Tambah Produk
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {myProducts.map((product) => (
                          <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{product.title}</h4>
                              <p className="text-sm text-gray-600">{product.price}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                                <span className="text-xs text-gray-500 flex items-center">
                                  <Eye className="w-3 h-3 mr-1" />
                                  {product.views} views
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil Singkat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-gray-600">Institut Teknologi Bandung</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm">4.8 (24 ulasan)</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Edit Profil
                </Button>
              </CardContent>
            </Card>

            {userRole === "seller" && (
              <Card>
                <CardHeader>
                  <CardTitle>Saldo & Penarikan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-green-600">Rp 2.450.000</p>
                    <p className="text-sm text-gray-600">Saldo tersedia</p>
                  </div>
                  <Button className="w-full">
                    <Wallet className="w-4 h-4 mr-2" />
                    Tarik Saldo
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Tips & Bantuan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-sm text-blue-900">
                      {userRole === "seller" && "Tingkatkan Penjualan"}
                      {userRole === "buyer" && "Belanja Aman"}
                      {userRole === "admin" && "Kelola Platform"}
                    </h4>
                    <p className="text-xs text-blue-700 mt-1">
                      {userRole === "seller" && "Gunakan foto berkualitas dan deskripsi detail"}
                      {userRole === "buyer" && "Selalu cek rating penjual sebelum membeli"}
                      {userRole === "admin" && "Monitor aktivitas pengguna secara berkala"}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Lihat Panduan Lengkap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
