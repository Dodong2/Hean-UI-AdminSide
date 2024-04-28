import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo1() {
  return (
    <Dialog className='border-custom-red'>
      <DialogTrigger asChild>
        <Button variant="outline" className='mt-4'>Add Services</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-custom-blue'>Services</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Services
            </Label>
            <Input
              id="username"
              defaultValue="Hospital Services"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className='gap-3'>
          <Button type="submit">Save Services</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
