def simple_wrapper(func):
    def _():
        print(func.__name__)
        return func
    return _

@simple_wrapper
def foo():
    pass

foo()