import AuthButton from "@/components/AuthButton";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <div className="w-full max-w-md p-8 glass rounded-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">
            Sign in to access your BrainBucket
          </p>
        </div>

        <div className="flex justify-center">
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
