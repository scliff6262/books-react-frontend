class BooksController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @books = Book.all
    respond_to do |f|
      f.json { render json: @books }
      f.html { render @books }
    end
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |f|
      f.json { render json: @book }
    end
  end

  def update
    @book = Book.find(params[:id])
    @book.has_read = true
    @book.save
    respond_to do |f|
      f.json { render json: @book }
    end
  end

  def create
    @book = Book.find_or_create_by(book_params)
    @book.has_read = false
    if @book.save
      respond_to do |f|
        f.json { render json: @book }
      end
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    respond_to do |f|
      f.json { render json: @book}
    end
  end

  private

  def book_params
    params.require(:book).permit(:author, :title, :img_link, :buy_link, :prev_link, :description)
  end

end
