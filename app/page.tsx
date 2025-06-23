import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Shield, Users, Zap, BookOpen, Laptop, Home, Shirt } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      title: "Buku Kalkulus Lengkap",
      price: 75000,
      originalPrice: 150000,
      condition: "Baik",
      seller: "Ahmad - ITB",
      image: "/placeholder.svg?height=200&width=200",
      category: "Buku",
    },
    {
      id: 2,
      title: "Laptop Asus VivoBook",
      price: 4500000,
      originalPrice: 7000000,
      condition: "Sangat Baik",
      seller: "Sari - UI",
      image: "/placeholder.svg?height=200&width=200",
      category: "Elektronik",
    },
    {
      id: 3,
      title: "Meja Belajar Minimalis",
      price: 200000,
      originalPrice: 400000,
      condition: "Baik",
      seller: "Budi - UGM",
      image: "/placeholder.svg?height=200&width=200",
      category: "Furnitur",
    },
    {
      id: 4,
      title: "Jaket Hoodie Uniqlo",
      price: 120000,
      originalPrice: 299000,
      condition: "Seperti Baru",
      seller: "Maya - UNPAD",
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
    },
  ]

  const categories = [
    { name: "Buku", icon: BookOpen, count: 1250 },
    { name: "Elektronik", icon: Laptop, count: 890 },
    { name: "Furnitur", icon: Home, count: 650 },
    { name: "Fashion", icon: Shirt, count: 2100 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">KosLoop</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
                Produk
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-blue-600 transition-colors">
                Kategori
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tentang
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  Masuk
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Daftar</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Marketplace Barang Bekas
            <span className="text-blue-600 block">Khusus Mahasiswa</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Jual beli barang bekas dengan aman dan mudah. Dari buku, elektronik, hingga furnitur kos - semua ada di
            KosLoop!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto">
                <Users className="w-5 h-5 mr-2" />
                Mulai Belanja
              </Button>
            </Link>
            <Link href="/seller/register">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Jadi Penjual
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari barang yang kamu butuhkan..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Cari</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Pilih KosLoop?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Aman & Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Semua pengguna diverifikasi sebagai mahasiswa aktif untuk keamanan maksimal
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Komunitas Mahasiswa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Platform khusus mahasiswa dengan sistem rating dan review yang transparan
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Transaksi Mudah</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Pembayaran digital yang aman dengan berbagai metode pembayaran</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Populer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <category.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-500 text-sm">{category.count.toLocaleString()} produk</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Produk Pilihan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500">{product.condition}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-blue-600">Rp {product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through">
                      Rp {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.seller}</p>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products">
              <Button variant="outline" size="lg">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Bergabung dengan KosLoop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ribuan mahasiswa sudah mempercayai KosLoop untuk jual beli barang bekas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Daftar Sekarang
              </Button>
            </Link>
            <Link href="/seller/register">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600"
              >
                Mulai Jualan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KL</span>
                </div>
                <span className="text-xl font-bold">KosLoop</span>
              </div>
              <p className="text-gray-400">Marketplace barang bekas terpercaya untuk mahasiswa Indonesia</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produk</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/categories/books" className="hover:text-white">
                    Buku
                  </Link>
                </li>
                <li>
                  <Link href="/categories/electronics" className="hover:text-white">
                    Elektronik
                  </Link>
                </li>
                <li>
                  <Link href="/categories/furniture" className="hover:text-white">
                    Furnitur
                  </Link>
                </li>
                <li>
                  <Link href="/categories/fashion" className="hover:text-white">
                    Fashion
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Bantuan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Pusat Bantuan
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ikuti Kami</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KosLoop. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
