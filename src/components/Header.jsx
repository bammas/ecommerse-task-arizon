export default function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between p-4">
      <div className="text-2xl font-bold text-yellow-600">
        QUALITY BEARINGS <br /> <span className="text-sm text-black">Keeping The World Turning</span>
      </div>
      <div className="flex-grow max-w-md mx-4">
        <input type="text" placeholder="Search by reference"
          className="border p-2 w-full" />
      </div>
      <div className="flex items-center gap-4">
        <span>Sign In / Register</span>
        <span>Recently Viewed</span>
        <span>0</span>
      </div>
    </div>
  )
}
